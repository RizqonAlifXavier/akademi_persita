<template inherit-attrs="false">
  <div class="register-page-container">
    <!-- Header Banner -->
    <div class="header-banner">
      <h1 class="banner-text">BERLATIH LAYAKNYA <span>SEORANG PRO.</span></h1>
    </div>

    <div class="form-outer-wrapper">
      <div class="form-main-container">
        <!-- Sidebar and Form Content -->
        <div class="registration-layout">
          <!-- Main Form -->
          <div class="form-content">
            <h2 class="form-title">PENDAFTARAN AKADEMI:</h2>

            <form @submit.prevent="submitRegistration">
              <!-- Full Player Name -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label>Nama Lengkap Pemain: <span class="required">*</span></label>
                  <input
                    v-model="form.fullName"
                    type="text"
                    placeholder="Nama depan, nama keluarga"
                    required
                  />
                </div>
              </div>

              <!-- Short Name, Gender, DOB -->
              <div class="field-row three-col">
                <div class="form-field">
                  <label>Nama Panggilan: <span class="required">*</span></label>
                  <input
                    v-model="form.shortName"
                    type="text"
                    placeholder="Nama Panggilan"
                    required
                  />
                </div>
                <div class="form-field">
                  <label>Jenis Kelamin <span class="required">*</span></label>
                  <select v-model="form.gender" required>
                    <option value="" disabled selected>Pilih Jenis Kelamin</option>
                    <option v-for="opt in genderOptions" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </div>
                <div class="form-field">
                  <label>Tanggal Lahir <span class="required">*</span></label>
                  <input v-model="form.birthDate" type="date" required />
                </div>
              </div>

              <!-- Jersey Size -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label>Ukuran Jersey (lihat bagan ukuran) <span class="required">*</span></label>
                  <select v-model="form.jerseySize" required>
                    <option value="" disabled selected>Pilih Ukuran</option>
                    <option v-for="size in jerseySizes" :key="size" :value="size">
                      {{ size }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Address -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label>Alamat: <span class="required">*</span></label>
                  <textarea v-model="form.address" rows="3" required></textarea>
                </div>
              </div>

              <!-- Contact Number (WA), School -->
              <div class="field-row two-col">
                <div class="form-field">
                  <label>Nomor Kontak (WA): <span class="required">*</span></label>
                  <input v-model="form.phoneWA" type="tel" placeholder="(123) 456-7890" required />
                </div>
                <div class="form-field">
                  <label>Sekolah: <span class="required">*</span></label>
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
                  <label>Nama Ibu</label>
                  <input v-model="form.motherName" type="text" />
                </div>
                <div class="form-field">
                  <label>Nomor Telepon Ibu:</label>
                  <input v-model="form.motherPhone" type="tel" placeholder="(123) 456-7890" />
                </div>
              </div>

              <!-- Father's Info -->
              <div class="field-row two-col">
                <div class="form-field">
                  <label>Nama Ayah</label>
                  <input v-model="form.fatherName" type="text" />
                </div>
                <div class="form-field">
                  <label>Nomor Telepon Ayah:</label>
                  <input v-model="form.fatherPhone" type="tel" placeholder="(123) 456-7890" />
                </div>
              </div>

              <!-- Allergies -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label
                    >Alergi, obat-obatan, atau kondisi medis lainnya yang perlu kami ketahui:</label
                  >
                  <textarea v-model="form.allergies" rows="2"></textarea>
                </div>
              </div>

              <!-- Medical Insurance -->
              <div class="field-row">
                <div class="form-field full-width">
                  <label
                    >Apakah peserta memiliki asuransi medis? <span class="required">*</span></label
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
                  <label>Program (sesi dan pembayaran): <span class="required">*</span></label>
                  <select v-model="form.program" required>
                    <option v-for="prog in programs" :key="prog.id" :value="prog.id">
                      {{ prog.label }}
                    </option>
                  </select>
                  <p v-if="selectedProgram" class="fee-info">
                    Total Bayar: IDR {{ (1000000 + selectedProgram.price).toLocaleString('id-ID') }}
                    <small
                      >(Pendaftaran 1jt + Program
                      {{ selectedProgram.price.toLocaleString('id-ID') }})</small
                    >
                  </p>
                </div>
              </div>

              <!-- Acknowledgments -->
              <div class="acknowledgments">
                <div class="ack-item">
                  <label>
                    Saya setuju untuk mentransfer biaya pendaftaran (IDR 1.000.000) dan biaya
                    program ke rekening Persita Akademi: CIMB NIAGA 7071 7077 8200 dan mengirimkan
                    bukti transfer via WA ke +62 8111 8898 05. <span class="required">*</span>
                  </label>
                  <input v-model="form.acknowledgments.signupFee" type="checkbox" required />
                </div>

                <div class="ack-item">
                  <label>
                    Saya setuju untuk mengenakan seragam Persita Akademi pada setiap sesi latihan
                    dan pertandingan. Kaos kaki sepak bola dan perlengkapan lainnya yang bukan dari
                    Persita harus berwarna netral (idealnya hitam). <span class="required">*</span>
                  </label>
                  <input v-model="form.acknowledgments.uniform" type="checkbox" required />
                </div>

                <div class="ack-item">
                  <label>
                    Harap tidak menampilkan Logo dan Merchandise klub atau liga lain selain Persita
                    Akademi dan Liga Indonesia. <span class="required">*</span>
                  </label>
                  <input v-model="form.acknowledgments.noLogos" type="checkbox" required />
                </div>

                <div class="ack-item">
                  <label>
                    Saya mengakui bahwa partisipasi dalam akademi sepak bola melibatkan aktivitas
                    fisik, dan saya menanggung semua risiko dan bahaya yang mungkin terjadi. Dengan
                    ini saya melepaskan akademi sepak bola, direktur, petugas, karyawan, agen, dan
                    sukarelawan dari segala tanggung jawab, klaim, tuntutan, atau tindakan apa pun
                    yang timbul dari kerusakan, kerugian, cedera, atau kematian bagi saya atau anak
                    saya selama berpartisipasi dalam acara tersebut. <span class="required">*</span>
                  </label>
                  <input v-model="form.acknowledgments.liability" type="checkbox" required />
                </div>

                <div class="ack-item">
                  <label>
                    Saya mengakui bahwa foto dan video yang diambil dapat digunakan untuk promosi;
                    termasuk namun tidak terbatas pada rilis berita; materi publisitas termasuk
                    buletin, majalah, brosur, situs web, dan media sosial. Foto dan video tidak akan
                    disertai dengan nama atau detail pribadi lainnya yang dapat mengidentifikasi
                    anak-anak atau orang muda tersebut. <span class="required">*</span>
                  </label>
                  <input v-model="form.acknowledgments.media" type="checkbox" required />
                </div>
              </div>

              <div class="field-row">
                <div class="form-field full-width">
                  <label>Catatan dan komentar:</label>
                  <textarea v-model="form.notes" rows="2"></textarea>
                </div>
              </div>

              <div class="submit-area">
                <button type="submit" class="register-submit-btn">LANJUTKAN KE PENDAFTARAN</button>
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
        <h3>Pendaftaran Berhasil!</h3>
        <p>Terima kasih, {{ form.fullName }}. Pendaftaran Anda telah kami terima.</p>
        <button class="pay-btn" @click="() => (showPayment = true)">Lanjutkan ke Pembayaran</button>
      </div>
    </div>

    <PaymentModal
      v-if="showPayment"
      :amount="totalAmount"
      :methods="paymentMethods"
      @confirm="onModalConfirm"
      @close="() => (showPayment = false)"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

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

const selectedProgram = computed(() => {
  return programs.find((p) => p.id === form.program)
})

const totalAmount = computed(() => {
  const baseRegistration = 1000000
  return baseRegistration + (selectedProgram.value?.price || 0)
})

const showPayment = ref(false)
const registrationSuccess = ref(false)
const registrationResult = ref(null)
const selectedPaymentMethod = ref('')

const genderOptions = ['Laki-laki', 'Perempuan']
const jerseySizes = [
  'Kids S',
  'Kids M',
  'Kids L',
  'Kids XL',
  'Dewasa S',
  'Dewasa M',
  'Dewasa L',
  'Dewasa XL',
  'Dewasa XXL',
]
const insuranceOptions = ['Ya', 'Tidak']
const programs = [
  {
    id: 'basic',
    label: 'Paket Basic: 1 sesi per minggu - IDR 800.000 / bulan',
    price: 800000,
  },
  {
    id: 'premium',
    label: 'Paket Premium: 2 sesi per minggu - IDR 1.500.000 / bulan',
    price: 1500000,
  },
  {
    id: 'elite',
    label: 'Paket Elite: Latihan Harian - IDR 2.000.000 / bulan',
    price: 2000000,
  },
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
        gross_amount: totalAmount.value,
      },
      customer_details: {
        first_name: form.fullName.split(' ')[0],
        last_name: form.fullName.split(' ').slice(1).join(' '),
        email: form.email,
        phone: form.phoneWA,
      },
      item_details: [
        {
          id: 'REGISTRATION_SIGNUP',
          price: 1000000,
          quantity: 1,
          name: 'Biaya Pendaftaran (Signup Fee)',
        },
        {
          id: form.program,
          price: selectedProgram.value?.price || 0,
          quantity: 1,
          name: `Biaya Program: ${selectedProgram.value?.label.split(' IDR')[0]}`,
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

.fee-info {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(124, 58, 237, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(124, 58, 237, 0.3);
  color: #ffffff;
  font-weight: 600;
}

.fee-info small {
  display: block;
  font-weight: 400;
  opacity: 0.8;
  margin-top: 0.25rem;
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
