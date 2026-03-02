<template inherit-attrs="false">
  <div class="register-page-container">
    <!-- Header Banner -->
    <div class="header-banner">
      <h1 class="banner-text">TRAIN LIKE <span>A PRO.</span></h1>
    </div>

    <div class="form-outer-wrapper">
      <div class="form-main-container">
        <!-- Sidebar and Form Content -->
        <div class="registration-layout">
          <!-- Main Form -->
          <div class="form-content">
            <h2 class="form-title">ACADEMY REGISTRATION:</h2>

            <form @submit.prevent="submitRegistration">
              <!-- Full Player Name -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label>Full Player Name: <span class="required">*</span></label>
                  <input
                    v-model="form.fullName"
                    type="text"
                    placeholder="First name, family name"
                    required
                  />
                </div>
              </div>

              <!-- Short Name, Gender, DOB -->
              <div class="field-row three-col">
                <div class="form-field">
                  <label>Short Name: <span class="required">*</span></label>
                  <input v-model="form.shortName" type="text" placeholder="Nickname" required />
                </div>
                <div class="form-field">
                  <label>Gender <span class="required">*</span></label>
                  <select v-model="form.gender" required>
                    <option value="" disabled selected>Select Gender</option>
                    <option v-for="opt in genderOptions" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </div>
                <div class="form-field">
                  <label>Date Of Birth <span class="required">*</span></label>
                  <input v-model="form.birthDate" type="date" required />
                </div>
              </div>

              <!-- Jersey Size -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label>Jersey size (see size chart) <span class="required">*</span></label>
                  <select v-model="form.jerseySize" required>
                    <option value="" disabled selected>Select Size</option>
                    <option v-for="size in jerseySizes" :key="size" :value="size">
                      {{ size }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Address -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label>Adress: <span class="required">*</span></label>
                  <textarea v-model="form.address" rows="3" required></textarea>
                </div>
              </div>

              <!-- Contact Number (WA), School -->
              <div class="field-row two-col">
                <div class="form-field">
                  <label>Contact Number (WA): <span class="required">*</span></label>
                  <input v-model="form.phoneWA" type="tel" placeholder="(123) 456-7890" required />
                </div>
                <div class="form-field">
                  <label>School: <span class="required">*</span></label>
                  <input v-model="form.school" type="text" required />
                </div>
              </div>

              <!-- Email -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label>Email:</label>
                  <input v-model="form.email" type="email" placeholder="@" required />
                </div>
              </div>

              <!-- Mother's Info -->
              <div class="field-row two-col">
                <div class="form-field">
                  <label>Name of Mother</label>
                  <input v-model="form.motherName" type="text" />
                </div>
                <div class="form-field">
                  <label>Phone Number Mother:</label>
                  <input v-model="form.motherPhone" type="tel" placeholder="(123) 456-7890" />
                </div>
              </div>

              <!-- Father's Info -->
              <div class="field-row two-col">
                <div class="form-field">
                  <label>Name Of Father</label>
                  <input v-model="form.fatherName" type="text" />
                </div>
                <div class="form-field">
                  <label>Phone Number Father:</label>
                  <input v-model="form.fatherPhone" type="tel" placeholder="(123) 456-7890" />
                </div>
              </div>

              <!-- Allergies -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label
                    >Any allergies, medications or other medical conditions we should be aware
                    of:</label
                  >
                  <textarea v-model="form.allergies" rows="2"></textarea>
                </div>
              </div>

              <!-- Medical Insurance -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label
                    >Does the participant have medical Insurance?
                    <span class="required">*</span></label
                  >
                  <select v-model="form.hasInsurance" required>
                    <option v-for="opt in insuranceOptions" :key="opt" :value="opt">
                      {{ opt }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Program -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label>Program (sessions and payments): <span class="required">*</span></label>
                  <select v-model="form.program" required>
                    <option v-for="prog in programs" :key="prog.id" :value="prog.id">
                      {{ prog.label }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Acknowledgments -->
              <div class="acknowledgments">
                <div class="ack-item">
                  <label>
                    I acknowledge to transfer the signup fee (IDR 1.000.000) and the program fee to
                    the German Football Indonesia account: CIMB NIAGA 7071 7077 8200 and send the
                    transfer slip via WA to +62 8111 8898 05. <span class="required">*</span>
                  </label>
                  <input v-model="form.acknowledgments.signupFee" type="checkbox" required />
                </div>

                <div class="ack-item">
                  <label>
                    I agree to wear the Borussia M'Gladbach Academy Indonesia (BAI) outfit at all
                    training sessions and matches. Football socks and other non-Borussia items
                    should be in neutral colors (ideally black).
                  </label>
                </div>

                <div class="ack-item">
                  <label>
                    Please do not display Logos and Merchandise of other clubs and leagues beside
                    Borussia Mönchengladbach and the Bundesliga. <span class="required">*</span>
                  </label>
                  <input v-model="form.acknowledgments.noLogos" type="checkbox" required />
                </div>

                <div class="ack-item">
                  <label>
                    I acknowledge that participation in the football academy involves physical
                    activities, and I assume all risks and hazards incidental to such participation.
                    I hereby waive, release, and forever discharge the football academy, its
                    directors, officers, employees, agents, and volunteers from any and all
                    liability, claims, demands, or causes of action whatsoever arising out of any
                    damage, loss, injury, or fatality to me or my child, while participating in the
                    events. <span class="required">*</span>
                  </label>
                  <input v-model="form.acknowledgments.liability" type="checkbox" required />
                </div>

                <div class="ack-item">
                  <label>
                    I acknowledge that images and videos taken may be used for promotion; including
                    but not limited to press release; publicity materials including newsletters,
                    magazines, brochures, websites and social media. Images and videos will not be
                    accompanied by names or other personal details that could identify individual
                    children or young people. <span class="required">*</span>
                  </label>
                  <input v-model="form.acknowledgments.media" type="checkbox" required />
                </div>
              </div>

              <div class="field-row">
                <div class="form-field full-width">
                  <label>Notes and comments:</label>
                  <textarea v-model="form.notes" rows="2"></textarea>
                </div>
              </div>

              <div class="submit-area">
                <button type="submit" class="register-submit-btn">PROCEED TO REGISTRATION</button>
              </div>
            </form>
          </div>

          <!-- Sidebar -->
          <div class="sidebar-content">
            <div class="jersey-section">
              <img
                src="https://via.placeholder.com/300x400?text=Jersey+Front"
                alt="Jersey Front"
                class="jersey-img"
              />
              <img
                src="https://via.placeholder.com/300x200?text=Size+Chart+Kids"
                alt="Size Chart Kids"
                class="chart-img"
              />
            </div>
            <div class="jersey-section">
              <img
                src="https://via.placeholder.com/300x400?text=Jersey+Back"
                alt="Jersey Back"
                class="jersey-img"
              />
              <img
                src="https://via.placeholder.com/300x200?text=Size+Chart+Adult"
                alt="Size Chart Adult"
                class="chart-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals & Success messages -->
    <div v-if="registrationSuccess" class="success-overlay">
      <div class="success-card">
        <h3>Registration Successful!</h3>
        <p>Thank you, {{ form.fullName }}. Your registration has been received.</p>
        <button class="pay-btn" @click="() => (showPayment = true)">Proceed to Payment</button>
      </div>
    </div>

    <PaymentModal
      v-if="showPayment"
      :amount="paymentConfig.registrationFee"
      :methods="paymentMethods"
      @confirm="onModalConfirm"
      @close="() => (showPayment = false)"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { paymentConfig } from '../config/midtrans'

defineOptions({
  name: 'AcademyRegistration',
})

interface RegistrationForm {
  fullName: string
  shortName: string
  gender: string
  birthDate: string
  jerseySize: string
  address: string
  phoneWA: string
  school: string
  email: string
  motherName: string
  motherPhone: string
  fatherName: string
  fatherPhone: string
  allergies: string
  hasInsurance: string
  program: string
  notes: string
  acknowledgments: {
    signupFee: boolean
    uniform: boolean
    noLogos: boolean
    liability: boolean
    media: boolean
  }
}

const form = reactive<RegistrationForm>({
  fullName: '',
  shortName: '',
  gender: '',
  birthDate: '',
  jerseySize: '',
  address: '',
  phoneWA: '',
  school: '',
  email: '',
  motherName: '',
  motherPhone: '',
  fatherName: '',
  fatherPhone: '',
  allergies: '',
  hasInsurance: '',
  program: '',
  notes: '',
  acknowledgments: {
    signupFee: false,
    uniform: false,
    noLogos: false,
    liability: false,
    media: false,
  },
})

const showPayment = ref(false)
const registrationSuccess = ref(false)
const registrationResult = ref(null)
const selectedPaymentMethod = ref('')

const genderOptions = ['Male', 'Female']
const jerseySizes = [
  'Kids S',
  'Kids M',
  'Kids L',
  'Kids XL',
  'Adult S',
  'Adult M',
  'Adult L',
  'Adult XL',
  'Adult XXL',
]
const insuranceOptions = ['Yes', 'No']
const programs = [
  { id: '1_session', label: '1 session per week IDR 800.000 for 1 month in advance' },
  { id: '2_sessions', label: '2 sessions per week IDR 1.500.000 for 1 month in advance' },
]

import PaymentModal from '../components/PaymentModal.vue'

const paymentMethods = [
  { id: 'gopay', name: 'GoPay' },
  { id: 'ovo', name: 'OVO' },
  { id: 'dana', name: 'DANA' },
  { id: 'bank_transfer', name: 'Transfer Bank' },
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

function onModalConfirm(method: string) {
  // close modal and set selected method then start payment
  showPayment.value = false
  selectedPaymentMethod.value = method
  processPayment()
}

interface Snap {
  pay: (
    token: string,
    options: {
      onSuccess?: (result: { transaction_id: string }) => void
      onPending?: (result: { transaction_id: string }) => void
      onError?: (result: unknown) => void
      onClose?: () => void
    },
  ) => void
}

declare const window: Window & { snap?: Snap }

interface MidtransResponse {
  token?: string
  redirect_url?: string
}

async function processPayment() {
  try {
    const transactionDetails = {
      transaction_details: {
        order_id: `REG-${Date.now()}`,
        gross_amount: paymentConfig.registrationFee,
      },
      customer_details: {
        first_name: form.fullName.split(' ')[0],
        last_name: form.fullName.split(' ').slice(1).join(' '),
        email: form.email,
        phone: form.phoneWA,
      },
      item_details: [
        {
          id: 'REGISTRATION_FEE',
          price: paymentConfig.registrationFee,
          quantity: 1,
          name: 'Biaya Pendaftaran Akademi Sepak Bola',
        },
      ],
      enabled_payments: selectedPaymentMethod.value ? [selectedPaymentMethod.value] : undefined,
    }

    const response = await fetch('/api/create-transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transactionDetails),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const resultToken: MidtransResponse = await response.json()

    // handle both snap token (popup) and redirect_url flows
    if (resultToken.token && typeof window.snap !== 'undefined' && window.snap) {
      try {
        window.snap.pay(resultToken.token, {
          onSuccess: function (res: { transaction_id: string }) {
            alert(`Pembayaran berhasil! Transaction ID: ${res.transaction_id}`)
            alert(`Terima kasih, ${form.fullName}! Pendaftaran dan pembayaran Anda telah diterima.`)
            alert(
              `Email konfirmasi pembayaran telah dikirim ke ${form.email}. Silakan cek inbox Anda.`,
            )
            reset()
            showPayment.value = false
          },
          onPending: function (res: { transaction_id: string }) {
            alert(`Pembayaran pending. Transaction ID: ${res.transaction_id}`)
            alert(`Email konfirmasi telah dikirim ke ${form.email}.`)
          },
          onError: function () {
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
    } else if (resultToken.redirect_url) {
      // open redirect url in same tab to continue payment flow
      window.location.href = resultToken.redirect_url
    } else {
      alert(
        'Midtrans Snap tidak tersedia atau token tidak ditemukan. Silakan refresh halaman and coba lagi.',
      )
    }
  } catch (error) {
    console.error('Payment error:', error)
    alert('Terjadi kesalahan dalam proses pembayaran. Silakan coba lagi.')
  }
}

function reset() {
  Object.assign(form, {
    fullName: '',
    shortName: '',
    gender: '',
    birthDate: '',
    jerseySize: '',
    address: '',
    phoneWA: '',
    school: '',
    email: '',
    motherName: '',
    motherPhone: '',
    fatherName: '',
    fatherPhone: '',
    allergies: '',
    hasInsurance: '',
    program: '',
    notes: '',
    acknowledgments: {
      signupFee: false,
      uniform: false,
      noLogos: false,
      liability: false,
      media: false,
    },
  })
  selectedPaymentMethod.value = ''
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Inter:wght@400;500;600;700&display=swap');

.register-page-container {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 6rem 1rem;
  font-family: 'Inter', sans-serif;
}

/* Moving Background with Ken Burns Effect */
.register-page-container::before {
  content: '';
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  background:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop')
      center center / cover no-repeat;
  z-index: -1;
  animation: backgroundMove 30s infinite alternate ease-in-out;
}

@keyframes backgroundMove {
  from {
    transform: scale(1) translate(0, 0);
  }
  to {
    transform: scale(1.15) translate(-3%, -2%);
  }
}

/* Header Banner */
.header-banner {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInDown 1s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.banner-text {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  color: white;
  letter-spacing: -2px;
  margin: 0;
  text-transform: uppercase;
  text-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
}

.banner-text span {
  color: #22c55e;
  display: inline-block;
  position: relative;
}

/* Form Container */
.form-outer-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-main-container {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 4rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.registration-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 5rem;
}

.form-title {
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 3.5rem;
  text-transform: uppercase;
  color: #ffffff;
  border-left: 10px solid #22c55e;
  padding-left: 2rem;
  line-height: 1;
}

/* Form Fields */
.field-row {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.form-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.full-width {
  flex: 100%;
}

.form-field label {
  font-weight: 700;
  font-size: 0.9rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.required {
  color: #f43f5e;
  margin-left: 4px;
}

/* Unified input styling with overrides */
.form-field input,
.form-field select,
.form-field textarea {
  background: rgba(255, 255, 255, 0.95) !important;
  color: #1e293b !important;
  padding: 1.1rem !important;
  border: 2px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px !important;
  font-size: 1rem !important;
  font-family: 'Inter', sans-serif !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  width: 100% !important;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: none !important;
  border-color: #22c55e !important;
  box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.2) !important;
  transform: translateY(-2px);
  background: white !important;
}

.form-field input::placeholder {
  color: #94a3b8;
}

/* Acknowledgments Section */
.acknowledgments {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 2px dashed rgba(255, 255, 255, 0.2);
}

.ack-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #ffffff;
}

.ack-item input[type='checkbox'] {
  margin-top: 5px;
  width: 24px;
  height: 24px;
  accent-color: #22c55e;
  cursor: pointer;
  flex-shrink: 0;
}

/* Submit Area */
.submit-area {
  margin-top: 5rem;
}

.register-submit-btn {
  width: 100%;
  background: #22c55e;
  color: white;
  padding: 2rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.8rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.register-submit-btn:hover {
  background: #16a34a;
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(34, 197, 94, 0.4);
}

.register-submit-btn:active {
  transform: translateY(-2px);
}

/* Sidebar Styling */
.sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.jersey-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.jersey-section:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

.jersey-img {
  width: 100%;
  max-width: 240px;
  height: auto;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3));
}

.chart-img {
  width: 100%;
  height: auto;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  filter: invert(1) brightness(2); /* Make black chart white */
}

/* Success Overlay */
.success-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.success-card {
  background: #0f172a;
  padding: 5rem 4rem;
  border-radius: 24px;
  text-align: center;
  max-width: 550px;
  box-shadow: 0 60px 120px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.success-card h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 2.8rem;
  color: #22c55e;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.success-card p {
  color: #ffffff;
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 3.5rem;
}

.pay-btn {
  background: #22c55e;
  color: white;
  border: none;
  padding: 1.4rem 4rem;
  border-radius: 12px;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.3s;
}

.pay-btn:hover {
  background: #16a34a;
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(22, 163, 74, 0.4);
}
/* Responsive Breakpoints */
@media (max-width: 1200px) {
  .registration-layout {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .sidebar-content {
    order: -1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .form-main-container {
    padding: 2.5rem 1.5rem;
  }

  .field-row {
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-title {
    font-size: 2rem;
    padding-left: 1.5rem;
  }
}
</style>
