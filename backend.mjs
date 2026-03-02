// Backend API for Midtrans Integration
// Run with: node backend.js

import express from 'express'
import midtransClient from 'midtrans-client'
import cors from 'cors'
import { Pool } from 'pg'
import nodemailer from 'nodemailer'
import winston from 'winston'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import Joi from 'joi'
import dotenv from 'dotenv'
import crypto from 'crypto'

dotenv.config()

// Debug: show whether Midtrans keys are loaded (masked for safety)
function maskKey(k) {
  if (!k) return null
  const s = String(k).trim()
  if (s.length <= 10) return s.replace(/.(?=.{2})/g, '*')
  return `${s.slice(0,6)}***${s.slice(-4)}`
}
console.log('MIDTRANS_SERVER_KEY present?', !!process.env.MIDTRANS_SERVER_KEY, 'masked=', maskKey(process.env.MIDTRANS_SERVER_KEY))
console.log('MIDTRANS_CLIENT_KEY present?', !!process.env.MIDTRANS_CLIENT_KEY, 'masked=', maskKey(process.env.MIDTRANS_CLIENT_KEY))

// Payment configuration
const paymentConfig = {
  registrationFee: 500000, // Rp 500,000
  monthlyFee: 500000, // Rp 500,000
  currency: 'IDR'
}

// Logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

// Global error handlers to capture unexpected crashes for debugging
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception', { message: err?.message, stack: err?.stack })
  console.error('Uncaught Exception', err)
  process.exit(1)
})
process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Rejection', { reason })
  console.error('Unhandled Rejection', reason)
  process.exit(1)
})

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(helmet())
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
}))
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:5173'],
  credentials: true
}))
app.use(express.json({ limit: '10mb' }))

// Validation middleware
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) {
      // Log full details for debugging and return all messages to client
      const messages = error.details.map(d => d.message)
      logger.warn('Validation error', { messages, payload: req.body })
      return res.status(400).json({ error: messages.join('; ') })
    }
    next()
  }
}

// Validation schemas
const registerSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9+\-\s()]+$/).required(),
  birthdate: Joi.date().required(),
  position: Joi.string().min(2).max(50).required(),
  skillLevel: Joi.string().valid('beginner', 'intermediate', 'advanced').required(),
  // guardianName should be required when the registrant is under 18 years old
  guardianName: Joi.string().min(2).max(100).when('birthdate', {
    // If birthdate is greater than (more recent than) the threshold, user is under 18
    is: Joi.date().greater(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000)),
    then: Joi.required(),
    otherwise: Joi.optional()
  }),
  message: Joi.string().max(500).optional()
})

const transactionSchema = Joi.object({
  transaction_details: Joi.object({
    order_id: Joi.string().required(),
    gross_amount: Joi.number().min(1).required()
  }).required(),
  customer_details: Joi.object({
    first_name: Joi.string().required(),
    // allow empty last name (some forms send empty string when not provided)
    last_name: Joi.string().allow('').optional(),
    email: Joi.string().email().required(),
    phone: Joi.string().required()
  }).required(),
  item_details: Joi.array().items(Joi.object({
    id: Joi.string().required(),
    price: Joi.number().min(0).required(),
    quantity: Joi.number().integer().min(1).required(),
    name: Joi.string().required()
  })).min(1).required()
  ,
  // allow optional enabled_payments array passed from frontend
  enabled_payments: Joi.array().items(Joi.string()).optional()
})


// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Validate required environment variables
if (!process.env.MIDTRANS_SERVER_KEY || !process.env.MIDTRANS_CLIENT_KEY) {
  logger.error('Midtrans keys are required. Please set MIDTRANS_SERVER_KEY and MIDTRANS_CLIENT_KEY in your environment variables.')
  process.exit(1)
}
console.log('MIDTRANS_SERVER_KEY present?', !!process.env.MIDTRANS_SERVER_KEY)

// Midtrans Configuration
// Auto-detect sandbox vs production from server key prefix when possible
const serverKey = String(process.env.MIDTRANS_SERVER_KEY || '')
const isSandboxKey = serverKey.startsWith('SB-')
const isProductionFlag = process.env.MIDTRANS_IS_PRODUCTION ? String(process.env.MIDTRANS_IS_PRODUCTION) === 'true' : !isSandboxKey
if (!isSandboxKey) {
  logger.warn('MIDTRANS_SERVER_KEY does not look like a sandbox key (missing "SB-" prefix). If you are testing in sandbox set sandbox keys or set MIDTRANS_IS_PRODUCTION appropriately')
}
const snap = new midtransClient.Snap({
  isProduction: isProductionFlag,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY
})

logger.info('Midtrans client initialized', { isProduction: isProductionFlag, clientKeyPrefix: maskKey(process.env.MIDTRANS_CLIENT_KEY)?.slice(0,6) })

// Database connection (optional for testing)
// Default to in-memory until a successful PostgreSQL connection is established
let _useDatabase = false
let pool = null

// Initialize database connection if environment variables are provided
if (process.env.DATABASE_URL || (process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_NAME)) {
  try {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 5432,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    })

    // Test connection
    pool.query('SELECT NOW()', (err, res) => {
      if (err) {
        logger.warn('Database connection failed, continuing without database', { error: err.message })
        pool = null
        _useDatabase = false
      } else {
        logger.info('Database connected successfully')
        _useDatabase = true
      }
    })
  } catch (error) {
    logger.warn('Failed to initialize database connection', { error: error.message })
    pool = null
    _useDatabase = false
  }
}

// In-memory storage for testing when database is not available
const inMemoryStorage = {
  customers: [],
  payments: []
}

// Email transporter (optional)
let transporter = null
if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}

// Routes

// Registration endpoint
app.post('/api/register', validate(registerSchema), async (req, res) => {
  try {
    const { name, email, phone, birthdate, position, skillLevel, guardianName, message } = req.body

    if (_useDatabase && pool) {
      // Store in database
      const query = `
        INSERT INTO customers (name, email, phone, birthdate, position, skill_level, guardian_name, message, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
        ON CONFLICT (email) DO UPDATE SET
          name = EXCLUDED.name,
          phone = EXCLUDED.phone,
          birthdate = EXCLUDED.birthdate,
          position = EXCLUDED.position,
          skill_level = EXCLUDED.skill_level,
          guardian_name = EXCLUDED.guardian_name,
          message = EXCLUDED.message,
          updated_at = NOW()
        RETURNING *
      `
      const values = [name, email, phone, birthdate, position, skillLevel, guardianName, message]
      const result = await pool.query(query, values)
      logger.info('Customer registered in database', { email, id: result.rows[0].id })
    } else {
      // Store in memory
      const existingIndex = inMemoryStorage.customers.findIndex(c => c.email === email)
      const customer = {
        id: Date.now(),
        name,
        email,
        phone,
        birthdate,
        position,
        skillLevel,
        guardianName,
        message,
        createdAt: new Date().toISOString()
      }

      if (existingIndex >= 0) {
        inMemoryStorage.customers[existingIndex] = customer
      } else {
        inMemoryStorage.customers.push(customer)
      }
      logger.info('Customer registered in memory', { email, id: customer.id })
    }

    // Send confirmation email if transporter is available
    if (transporter) {
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
          to: email,
          subject: 'Pendaftaran Akademi Sepak Bola Berhasil',
          html: `
            <h2>Selamat datang di Akademi Sepak Bola!</h2>
            <p>Halo ${name},</p>
            <p>Terima kasih telah mendaftar di akademi sepak bola kami.</p>
            <p>Detail pendaftaran Anda:</p>
            <ul>
              <li>Nama: ${name}</li>
              <li>Email: ${email}</li>
              <li>Posisi: ${position}</li>
              <li>Tingkat Kemampuan: ${skillLevel}</li>
            </ul>
            <p>Silakan lanjutkan ke pembayaran biaya pendaftaran sebesar Rp ${paymentConfig.registrationFee.toLocaleString('id-ID')}.</p>
            <p>Salam,<br>Akademi Sepak Bola</p>
          `
        })
        logger.info('Registration confirmation email sent', { email })
      } catch (emailError) {
        logger.warn('Failed to send registration email', { email, error: emailError.message })
      }
    }

    res.json({
      success: true,
      message: 'Registration successful',
      customer: { name, email, phone }
    })
  } catch (error) {
    logger.error('Registration error', { error: error.message, stack: error.stack })
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Create transaction endpoint
app.post('/api/create-transaction', validate(transactionSchema), async (req, res) => {
  try {
    const transactionData = req.body

    // Create transaction with Midtrans
    const transaction = await snap.createTransaction(transactionData)

    logger.info('Transaction created', {
      orderId: transactionData.transaction_details.order_id,
      amount: transactionData.transaction_details.gross_amount
    })

    res.json({
      token: transaction.token,
      redirect_url: transaction.redirect_url
    })
  } catch (error) {
    logger.error('Transaction creation error', { error: error.message, stack: error.stack })
    res.status(500).json({ error: 'Failed to create transaction' })
  }
})

// Get customer by email
app.get('/api/customers', async (req, res) => {
  try {
    const { email } = req.query

    if (!email) {
      return res.status(400).json({ error: 'Email parameter required' })
    }

    let customer = null

    if (_useDatabase && pool) {
      const query = 'SELECT * FROM customers WHERE email = $1'
      const result = await pool.query(query, [email])
      customer = result.rows[0]
    } else {
      customer = inMemoryStorage.customers.find(c => c.email === email)
    }

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' })
    }

    res.json({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      position: customer.position,
      skillLevel: customer.skill_level || customer.skillLevel
    })
  } catch (error) {
    logger.error('Get customer error', { error: error.message, email: req.query.email })
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get payment history by email
app.get('/api/payments', async (req, res) => {
  try {
    const { email } = req.query

    if (!email) {
      return res.status(400).json({ error: 'Email parameter required' })
    }

    let payments = []

    if (_useDatabase && pool) {
      const query = 'SELECT * FROM payments WHERE customer_email = $1 ORDER BY created_at DESC'
      const result = await pool.query(query, [email])
      payments = result.rows
    } else {
      payments = inMemoryStorage.payments.filter(p => p.customerEmail === email)
    }

    res.json(payments)
  } catch (error) {
    logger.error('Get payments error', { error: error.message, email: req.query.email })
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get payment status by order ID
app.get('/api/payment-status/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params

    // Check status with Midtrans
    const status = await snap.transaction.status(orderId)

    // Store payment status if database is available
    if (_useDatabase && pool) {
      const query = `
        INSERT INTO payments (order_id, customer_email, amount, status, payment_type, created_at)
        VALUES ($1, $2, $3, $4, $5, NOW())
        ON CONFLICT (order_id) DO UPDATE SET
          status = EXCLUDED.status,
          updated_at = NOW()
      `
      const values = [
        status.order_id,
        status.customer_details?.email || status.custom_field1,
        status.gross_amount,
        status.transaction_status,
        status.payment_type
      ]
      await pool.query(query, values)
    } else {
      // Store in memory
      const existingIndex = inMemoryStorage.payments.findIndex(p => p.orderId === orderId)
      const payment = {
        orderId: status.order_id,
        customerEmail: status.customer_details?.email || status.custom_field1,
        amount: status.gross_amount,
        status: status.transaction_status,
        paymentType: status.payment_type,
        createdAt: new Date().toISOString()
      }

      if (existingIndex >= 0) {
        inMemoryStorage.payments[existingIndex] = payment
      } else {
        inMemoryStorage.payments.push(payment)
      }
    }

    res.json({
      orderId: status.order_id,
      status: status.transaction_status,
      amount: status.gross_amount,
      paymentType: status.payment_type
    })
  } catch (error) {
    logger.error('Get payment status error', { error: error.message, orderId: req.params.orderId })
    res.status(500).json({ error: 'Failed to get payment status' })
  }
})

// Start server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
  console.log(`Server running on http://localhost:${PORT}`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully')
  if (pool) {
    pool.end(() => {
      logger.info('Database connection closed')
      process.exit(0)
    })
  } else {
    process.exit(0)
  }
})

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully')
  if (pool) {
    pool.end(() => {
      logger.info('Database connection closed')
      process.exit(0)
    })
  } else {
    process.exit(0)
  }
})