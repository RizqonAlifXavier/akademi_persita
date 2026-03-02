// Midtrans Configuration
export const midtransConfig = {
  // Sandbox environment
  clientKey: import.meta.env.VITE_MIDTRANS_CLIENT_KEY,
  serverKey: import.meta.env.VITE_MIDTRANS_SERVER_KEY,

  // Production environment
  // clientKey: import.meta.env.VITE_MIDTRANS_PROD_CLIENT_KEY,
  // serverKey: import.meta.env.VITE_MIDTRANS_PROD_SERVER_KEY,
}

// Payment configuration
export const paymentConfig = {
  registrationFee: 500000, // Rp 500,000
  monthlyFee: 500000, // Rp 500,000
  currency: 'IDR',
}
