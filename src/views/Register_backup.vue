<template>
  <div class="page">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge">⚽ PERSITA AKADEMI</div>
        <h1 class="hero-title">Daftar Sekarang!</h1>
        <p class="hero-subtitle">Wujudkan Impian Menjadi Pemain Sepak Bola Profesional</p>
        <div class="hero-features">
          <div class="feature-item">
            <span class="feature-icon">🏆</span>
            <span>Pelatih Berlisensi</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span>Fasilitas Modern</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🎯</span>
            <span>Program Terstruktur</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section content-block">
      <div class="container">
        <div class="register-form-wrapper">
          <!-- Tab Navigation -->
          <div class="tab-nav">
            <button :class="{ active: activeTab === 'register' }" @click="activeTab = 'register'">
              Pendaftaran
            </button>
            <button :class="{ active: activeTab === 'status' }" @click="activeTab = 'status'">
              Cek Status Pembayaran
            </button>
          </div>

          <!-- Registration Tab -->
          <div v-if="activeTab === 'register'">
            <form @submit.prevent="submitRegistration">
              <div class="form-group">
                <h1>Formulir Pendaftaran</h1>
                <p>Nama Lengkap:</p>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
                <p>Nama Belakang:</p>
                <input
                  v-model="form.last_name"
                  type="text"
                  placeholder="Masukkan nama belakang Anda"
                  required
                />
                <p>Tanggal Lahir:</p>
                <input v-model="form.birthdate" type="date" required />
              </div>
              <div class="row"></div>
              <div class="row">
                <select v-model="form.position" required>
                  <option value="">Pilih Posisi</option>
                  <option value="striker">Striker</option>
                  <option value="midfielder">Midfielder</option>
                  <option value="defender">Defender</option>
                  <option value="goalkeeper">Goalkeeper</option>
                </select>
                <select v-model="form.skillLevel" required>
                  <option value="">Tingkat Kemampuan</option>
                  <option value="beginner">Pemula</option>
                  <option value="intermediate">Menengah</option>
                  <option value="advanced">Lanjutan</option>
                </select>
              </div>
              <input
                v-model="form.guardianName"
                type="text"
                placeholder="Masukkan nama orang tua atau wali"
                required
              />
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Masukkan nomor telepon (contoh: 08123456789)"
                required
              />
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Ceritakan pengalaman sepak bola Anda (opsional)"
                required
              ></textarea>
              <div class="row">
                <button type="submit">Lanjut ke Pembayaran Pendaftaran</button>
                <button type="button" class="alt" @click="reset">Reset Formulir</button>
              </div>
            </form>

            <!-- Confirmation message after successful registration -->
            <div v-if="registrationSuccess" class="registration-success" style="margin-top: 1rem">
              <p>Registrasi berhasil. Terima kasih, {{ form.name }}.</p>
              <button class="pay-btn" @click="() => (showPayment = true)">
                Lanjut ke Pembayaran
              </button>
            </div>

            <!-- Payment Section -->
            <div v-if="showPayment" class="payment-section">
              <h3>Pembayaran Pendaftaran</h3>
              <p>
                Biaya pendaftaran: Rp {{ paymentConfig.registrationFee.toLocaleString('id-ID') }}
              </p>
              <div class="payment-methods">
                <label v-for="method in paymentMethods" :key="method.id" class="payment-method">
                  <input v-model="selectedPaymentMethod" type="radio" :value="method.id" />
                  <span>{{ method.name }}</span>
                </label>
              </div>
              <button @click="processPayment" :disabled="!selectedPaymentMethod" class="pay-btn">
                Bayar Sekarang
              </button>
            </div>
            <!-- Payment handled in modal -->
            <PaymentModal
              v-if="showPayment"
              :amount="paymentConfig.registrationFee"
              :methods="paymentMethods"
              @confirm="onModalConfirm"
              @close="() => (showPayment = false)"
              ``
            />
          </div>

          <!-- Payment Status Tab -->
          <div v-if="activeTab === 'status'" class="status-section">
            <h3>Cek Status Pembayaran Akademi</h3>
            <form @submit.prevent="checkStatus" class="status-form">
              <input
                v-model="statusEmail"
                type="email"
                placeholder="Masukkan email yang digunakan saat pendaftaran"
                required
              />
              <button type="submit">Cek Status Pembayaran</button>
            </form>

            <div v-if="statusResult" class="status-result">
              <div
                class="status-card"
                :class="{ paid: statusResult.paid, unpaid: !statusResult.paid }"
              >
                <p><strong>Nama:</strong> {{ statusResult.name }}</p>
                <p><strong>Email:</strong> {{ statusResult.email }}</p>
                <p>
                  <strong>Status Bulan Ini:</strong>
                  {{ statusResult.paid ? 'Sudah Bayar' : 'Belum Bayar' }}
                </p>
                <p v-if="!statusResult.paid">
                  <strong>Jumlah Tagihan:</strong> Rp {{ statusResult.amount }}
                </p>
                <p><strong>Jatuh Tempo:</strong> {{ statusResult.dueDate }}</p>
              </div>
              <div v-if="!statusResult.paid" class="payment-reminder">
                <p>
                  ⚠️ Reminder: Pembayaran biaya akademi bulanan sebesar Rp
                  {{ statusResult.amount }} harus dilakukan sebelum {{ statusResult.dueDate }}.
                </p>
                <p style="font-size: 0.9em; color: #666">
                  📧 Email reminder telah dikirim ke {{ statusResult.email }} setiap bulan.
                </p>
                <button @click="payNow" class="pay-btn">Bayar Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { paymentConfig } from '../config/midtrans'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  birthdate: '',
  position: '',
  skillLevel: '',
  guardianName: '',
  message: '',
})

const activeTab = ref('register')
const showPayment = ref(false)
const registrationSuccess = ref(false)
const registrationResult = ref(null)
const selectedPaymentMethod = ref('')
const statusEmail = ref('')
const statusResult = ref(null)

import PaymentModal from '../components/PaymentModal.vue'

const paymentMethods = [
  { id: 'gopay', name: 'GoPay' },
  { id: 'ovo', name: 'OVO' },
  { id: 'dana', name: 'DANA' },
  { id: 'bank_transfer', name: 'Transfer Bank' },
]

// Mock data for payment status
const mockPayments = [
  {
    email: 'john@example.com',
    name: 'John Doe',
    paid: true,
    amount: paymentConfig.monthlyFee,
    dueDate: '2025-01-05',
  },
  {
    email: 'jane@example.com',
    name: 'Jane Smith',
    paid: false,
    amount: paymentConfig.monthlyFee,
    dueDate: '2025-01-05',
  },
]

async function submitRegistration() {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log('Registration successful:', result)
    registrationSuccess.value = true
    registrationResult.value = result
  } catch (error) {
    console.error('Registration error:', error)
    alert('Terjadi kesalahan saat mendaftar. Silakan coba lagi.')
  }
}

function onModalConfirm(method) {
  // close modal and set selected method then start payment
  showPayment.value = false
  selectedPaymentMethod.value = method
  processPayment()
}

async function processPayment() {
  try {
    const transactionDetails = {
      transaction_details: {
        order_id: `REG-${Date.now()}`,
        gross_amount: paymentConfig.registrationFee,
      },
      customer_details: {
        first_name: form.name.split(' ')[0],
        last_name: form.name.split(' ').slice(1).join(' '),
        email: form.email,
        phone: form.phone,
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
    // include selected payment method when provided to influence Snap flow
    if (selectedPaymentMethod.value) {
      transactionDetails.enabled_payments = [selectedPaymentMethod.value]
    }

    const response = await fetch('/api/create-transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transactionDetails),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    // handle both snap token (popup) and redirect_url flows
    if (result.token && typeof window.snap !== 'undefined') {
      try {
        window.snap.pay(result.token, {
          onSuccess: function (result) {
            alert(`Pembayaran berhasil! Transaction ID: ${result.transaction_id}`)
            alert(`Terima kasih, ${form.name}! Pendaftaran dan pembayaran Anda telah diterima.`)
            alert(
              `Email konfirmasi pembayaran telah dikirim ke ${form.email}. Silakan cek inbox Anda.`,
            )
            reset()
            showPayment.value = false
          },
          onPending: function (result) {
            alert(`Pembayaran pending. Transaction ID: ${result.transaction_id}`)
            alert(`Email konfirmasi telah dikirim ke ${form.email}.`)
          },
          onError: function (result) {
            alert('Pembayaran gagal. Silakan coba lagi.')
          },
          onClose: function () {
            alert('Anda menutup popup pembayaran tanpa menyelesaikan transaksi.')
          },
        })
      } catch (err) {
        console.error('snap.pay error:', err)
        alert('Terjadi kesalahan saat membuka popup pembayaran. Silakan coba lagi.')
      }
    } else if (result.redirect_url) {
      // open redirect url in same tab to continue payment flow
      window.location.href = result.redirect_url
    } else {
      alert(
        'Midtrans Snap tidak tersedia atau token tidak ditemukan. Silakan refresh halaman dan coba lagi.',
      )
    }
  } catch (error) {
    console.error('Payment error:', error)
    alert('Terjadi kesalahan dalam proses pembayaran. Silakan coba lagi.')
  }
}

async function checkStatus() {
  try {
    const response = await fetch(`/api/customers?email=${encodeURIComponent(statusEmail.value)}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const customer = await response.json()

    // Get payment history
    const paymentsResponse = await fetch(
      `/api/payments?email=${encodeURIComponent(statusEmail.value)}`,
    )
    const payments = await paymentsResponse.json()

    // Determine current month payment status
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    const currentMonthPayment = payments.find(
      (p) =>
        new Date(p.createdAt).getMonth() === currentMonth &&
        new Date(p.createdAt).getFullYear() === currentYear,
    )

    const dueDate = new Date(currentYear, currentMonth + 1, 5).toISOString().split('T')[0] // 5th of next month

    statusResult.value = {
      name: customer.name,
      email: customer.email,
      paid: currentMonthPayment && currentMonthPayment.status === 'settlement',
      amount: paymentConfig.monthlyFee,
      dueDate: dueDate,
    }
  } catch (error) {
    console.error('Status check error:', error)
    alert('Terjadi kesalahan saat memeriksa status. Silakan coba lagi.')
    statusResult.value = null
  }
}

async function payNow() {
  try {
    const transactionDetails = {
      transaction_details: {
        order_id: `MONTHLY-${Date.now()}`,
        gross_amount: paymentConfig.monthlyFee,
      },
      customer_details: {
        first_name: statusResult.value.name.split(' ')[0],
        last_name: statusResult.value.name.split(' ').slice(1).join(' '),
        email: statusResult.value.email,
        phone: '', // Would need to get from customer data
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

    const response = await fetch('/api/create-transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transactionDetails),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.token && typeof window.snap !== 'undefined') {
      try {
        window.snap.pay(result.token, {
          onSuccess: function (result) {
            alert(`Pembayaran bulanan berhasil! Transaction ID: ${result.transaction_id}`)
            alert(`Email konfirmasi pembayaran telah dikirim ke ${statusResult.value.email}.`)
            // Refresh status after payment
            checkStatus()
          },
          onPending: function (result) {
            alert(`Pembayaran pending. Transaction ID: ${result.transaction_id}`)
          },
          onError: function (result) {
            alert('Pembayaran gagal. Silakan coba lagi.')
          },
          onClose: function () {
            alert('Anda menutup popup pembayaran tanpa menyelesaikan transaksi.')
          },
        })
      } catch (err) {
        console.error('snap.pay error:', err)
        alert('Terjadi kesalahan saat membuka popup pembayaran. Silakan coba lagi.')
      }
    } else if (result.redirect_url) {
      window.location.href = result.redirect_url
    } else {
      alert('Mengalihkan ke gateway pembayaran...')
      alert(`Pembayaran berhasil! Email konfirmasi telah dikirim ke ${statusResult.value.email}.`)
      checkStatus()
    }
  } catch (error) {
    console.error('Monthly payment error:', error)
    alert('Terjadi kesalahan dalam proses pembayaran. Silakan coba lagi.')
  }
}

function reset() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.birthdate = ''
  form.position = ''
  form.skillLevel = ''
  form.guardianName = ''
  form.message = ''
  selectedPaymentMethod.value = ''
  statusEmail.value = ''
  statusResult.value = null
}
</script>

<style scoped src="../styles/landing.css"></style>

<style scoped>
/* Register Page Specific Styling */
.page .content-block {
  background: rgba(249, 115, 22, 0.05);
  border: 1px solid rgba(249, 115, 22, 0.1);
  box-shadow: 0 4px 20px rgba(249, 115, 22, 0.08);
}

.page .content-block::before {
  background: #f97316;
}

/* Ensure text visibility */
.register-form-wrapper h1,
.register-form-wrapper h3,
.register-form-wrapper p,
.register-form-wrapper label,
.register-form-wrapper span {
  color: #1f2937;
}

.register-form-wrapper input,
.register-form-wrapper select,
.register-form-wrapper textarea {
  color: #000;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(249, 115, 22, 0.3);
}

.register-form-wrapper input::placeholder,
.register-form-wrapper textarea::placeholder {
  color: rgba(0, 0, 0, 0.6);
}

/* Tab navigation styling */
.tab-nav {
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 2px solid rgba(249, 115, 22, 0.2);
}

.tab-nav button {
  background: none;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: 600;
  color: #4b5563;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab-nav button.active {
  color: #63338f;
  border-bottom-color: #63338f;
}

.tab-nav button:hover {
  color: #63338f;
}

/* Form styling */
.register-form-wrapper form {
  margin-bottom: 2rem;
}

.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.row input,
.row select {
  flex: 1;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
}

button[type='submit'],
.pay-btn {
  background: white;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

button[type='submit']:hover,
.pay-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

button.alt {
  background: rgba(255, 255, 255, 0.1);
  color: #63338f;
  border: 2px solid #63338f;
}

button.alt:hover {
  background: #63338f;
  color: white;
}

/* Payment section */
.payment-section {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(249, 115, 22, 0.2);
  margin-top: 2rem;
}

.payment-methods {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(249, 115, 22, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.payment-method:hover {
  background: rgba(249, 115, 22, 0.2);
}

.payment-method input[type='radio'] {
  margin: 0;
}

/* Status section */
.status-section {
  margin-top: 2rem;
}

.status-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
}

.status-form input {
  flex: 1;
}

.status-result {
  margin-top: 2rem;
}

.status-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  margin-bottom: 1rem;
}

.status-card.paid {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.05);
}

.status-card.unpaid {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.05);
}

.status-card p {
  margin: 0.5rem 0;
  color: #1f2937;
}

.payment-reminder {
  background: rgba(249, 115, 22, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #f97316;
}

.payment-reminder p {
  margin: 0.5rem 0;
  color: #1f2937;
}

/* Responsive */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .tab-nav {
    flex-direction: column;
  }

  .tab-nav button {
    text-align: center;
  }

  .status-form {
    flex-direction: column;
    align-items: stretch;
  }

  .payment-methods {
    flex-direction: column;
  }
}
</style>
