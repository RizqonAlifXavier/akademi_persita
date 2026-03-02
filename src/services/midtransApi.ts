// Midtrans API Service
// This file shows how to integrate with Midtrans API
// In production, move this to your backend server

import { paymentConfig } from '../config/midtrans'

// Types for API requests
interface TransactionRequest {
  transaction_details: {
    order_id: string
    gross_amount: number
  }
  customer_details: {
    first_name: string
    last_name: string
    email: string
    phone: string
  }
  item_details: Array<{
    id: string
    price: number
    quantity: number
    name: string
  }>
}

interface ApiResponse {
  token: string
  redirect_url?: string
}

interface CustomerData {
  name: string
  email: string
  phone: string
}

// API Base URL - change this to your backend URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

class MidtransApiService {
  // Create transaction token for registration payment
  async createRegistrationTransaction(customerData: {
    name: string
    email: string
    phone: string
  }): Promise<string> {
    const transactionData: TransactionRequest = {
      transaction_details: {
        order_id: `REG-${Date.now()}`,
        gross_amount: paymentConfig.registrationFee,
      },
      customer_details: {
        first_name: customerData.name.split(' ')[0] || '',
        last_name: customerData.name.split(' ').slice(1).join(' ') || '',
        email: customerData.email,
        phone: customerData.phone,
      },
      item_details: [
        {
          id: 'REGISTRATION_FEE',
          price: paymentConfig.registrationFee,
          quantity: 1,
          name: 'Biaya Pendaftaran Akademi Sepak Bola',
        },
      ],
    }

    try {
      const response = await fetch(`${API_BASE_URL}/create-transaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.error || response.statusText}`,
        )
      }

      const result: ApiResponse = await response.json()
      if (!result.token) {
        throw new Error('Invalid response: missing token')
      }
      return result.token
    } catch (error) {
      console.error('Error creating transaction:', error)
      throw error
    }
  }

  // Create transaction token for monthly payment
  async createMonthlyTransaction(email: string): Promise<string> {
    // First, get customer data from your backend
    const customerResponse = await fetch(`${API_BASE_URL}/customers?email=${email}`)
    const customerData: CustomerData = await customerResponse.json()

    const nameParts = customerData.name.split(' ')
    const transactionData: TransactionRequest = {
      transaction_details: {
        order_id: `MONTHLY-${Date.now()}`,
        gross_amount: paymentConfig.monthlyFee,
      },
      customer_details: {
        first_name: nameParts[0] || '',
        last_name: nameParts.slice(1).join(' ') || '',
        email: customerData.email,
        phone: customerData.phone,
      },
      item_details: [
        {
          id: 'MONTHLY_FEE',
          price: paymentConfig.monthlyFee,
          quantity: 1,
          name: 'Biaya Bulanan Akademi Sepak Bola',
        },
      ],
    }

    try {
      const response = await fetch(`${API_BASE_URL}/create-transaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: ApiResponse = await response.json()
      return result.token
    } catch (error) {
      console.error('Error creating monthly transaction:', error)
      throw error
    }
  }

  // Check payment status
  async checkPaymentStatus(orderId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/payment-status/${orderId}`)
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.error || response.statusText}`,
        )
      }
      return await response.json()
    } catch (error) {
      console.error('Error checking payment status:', error)
      throw error
    }
  }

  // Get customer payment history
  async getPaymentHistory(email: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/payments?email=${email}`)
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.error || response.statusText}`,
        )
      }
      return await response.json()
    } catch (error) {
      console.error('Error getting payment history:', error)
      throw error
    }
  }
}

// Export singleton instance
export const midtransApi = new MidtransApiService()

// Example usage in components:
/*
// In Register.vue
import { midtransApi } from '../services/midtransApi'

async function processPayment() {
  try {
    const snapToken = await midtransApi.createRegistrationTransaction({
      name: form.name,
      email: form.email,
      phone: form.phone
    })

    window.snap.pay(snapToken, {
      onSuccess: (result) => {
        console.log('Payment success:', result)
        // Handle success
      },
      onPending: (result) => {
        console.log('Payment pending:', result)
        // Handle pending
      },
      onError: (result) => {
        console.log('Payment error:', result)
        // Handle error
      }
    })
  } catch (error) {
    console.error('Payment failed:', error)
  }
}
*/
