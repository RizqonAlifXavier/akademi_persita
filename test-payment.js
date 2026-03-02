// Payment Gateway Integration Test Script
// Run with: node test-payment.js

import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

// Test data
const testCustomer = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+6281234567890',
  birthdate: '1990-01-01',
  position: 'Forward',
  skillLevel: 'intermediate',
  guardianName: 'Jane Doe',
  message: 'Excited to join the academy!'
}

const testTransaction = {
  transaction_details: {
    order_id: `test-${Date.now()}`,
    gross_amount: 100000
  },
  customer_details: {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    phone: '+6281234567890'
  },
  item_details: [{
    id: 'registration-fee',
    price: 100000,
    quantity: 1,
    name: 'Registration Fee'
  }]
}

async function testHealthCheck() {
  console.log('\n🔍 Testing Health Check...')
  try {
    const response = await axios.get(`${BASE_URL}/health`)
    console.log('✅ Health Check:', response.data)
    return true
  } catch (error) {
    console.log('❌ Health Check failed:', error.response?.data || error.message)
    return false
  }
}

async function testCustomerRegistration() {
  console.log('\n👤 Testing Customer Registration...')
  try {
    const response = await axios.post(`${BASE_URL}/register`, testCustomer)
    console.log('✅ Registration successful:', response.data)
    return response.data.customer
  } catch (error) {
    console.log('❌ Registration failed:', error.response?.data || error.message)
    return null
  }
}

async function testGetCustomer(customer) {
  console.log('\n🔍 Testing Get Customer...')
  try {
    const response = await axios.get(`${BASE_URL}/customers?email=${customer.email}`)
    console.log('✅ Get customer successful:', response.data)
    return true
  } catch (error) {
    console.log('❌ Get customer failed:', error.response?.data || error.message)
    return false
  }
}

async function testCreateTransaction() {
  console.log('\n💳 Testing Transaction Creation...')
  try {
    const response = await axios.post(`${BASE_URL}/create-transaction`, testTransaction)
    console.log('✅ Transaction created:', response.data)
    return response.data
  } catch (error) {
    console.log('❌ Transaction creation failed:', error.response?.data || error.message)
    return null
  }
}

async function testPaymentStatus(orderId) {
  console.log('\n📊 Testing Payment Status Check...')
  try {
    const response = await axios.get(`${BASE_URL}/payment-status/${orderId}`)
    console.log('✅ Payment status:', response.data)
    return true
  } catch (error) {
    console.log('❌ Payment status check failed:', error.response?.data || error.message)
    return false
  }
}

async function testGetPayments(email) {
  console.log('\n📋 Testing Get Payments...')
  try {
    const response = await axios.get(`${BASE_URL}/payments?email=${email}`)
    console.log('✅ Get payments successful:', response.data)
    return true
  } catch (error) {
    console.log('❌ Get payments failed:', error.response?.data || error.message)
    return false
  }
}

async function runTests() {
  console.log('🚀 Starting Payment Gateway Integration Tests')
  console.log('=' .repeat(50))

  // Test 1: Health Check
  const healthOk = await testHealthCheck()
  if (!healthOk) {
    console.log('\n❌ Backend server is not running. Please start it with: node backend.js')
    return
  }

  // Test 2: Customer Registration
  const customer = await testCustomerRegistration()
  if (!customer) return

  // Test 3: Get Customer
  await testGetCustomer(customer)

  // Test 4: Create Transaction
  const transaction = await testCreateTransaction()
  if (!transaction) return

  // Test 5: Check Payment Status
  await testPaymentStatus(testTransaction.transaction_details.order_id)

  // Test 6: Get Payments
  await testGetPayments(customer.email)

  console.log('\n' + '='.repeat(50))
  console.log('✅ All tests completed!')
  console.log('\n📝 Next steps:')
  console.log('1. Copy the redirect_url from transaction creation')
  console.log('2. Open it in browser to complete payment')
  console.log('3. Check payment status after completion')
  console.log('4. Test email notifications (configure email settings first)')
}

runTests().catch(console.error)