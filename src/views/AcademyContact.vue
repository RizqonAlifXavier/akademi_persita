<template>
  <div class="page">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge">⚽ PERSITA AKADEMI</div>
        <h1 class="hero-title">Hubungi Kami</h1>
        <p class="hero-subtitle">Kami Siap Membantu Anda Memulai Perjalanan Sepak Bola</p>
        <div class="hero-features">
          <div class="feature-item">
            <span class="feature-icon">📞</span>
            <span>Respon Cepat</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">💬</span>
            <span>Konsultasi Gratis</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📍</span>
            <span>Lokasi Strategis</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section content-block">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <h3>📍 Lokasi</h3>
              <p>Jl. Persita No. 123, Tangerang<br />Jawa Barat, Indonesia</p>
            </div>
            <div class="info-item">
              <h3>📞 Telepon</h3>
              <p>+62 21 1234 5678</p>
            </div>
            <div class="info-item">
              <h3>✉️ Email</h3>
              <p>info@persitaakademi.com</p>
            </div>
          </div>
          <div class="contact-form">
            <form @submit.prevent="submitContact">
              <input
                v-model="contactForm.name"
                type="text"
                placeholder="Masukkan nama lengkap Anda"
                required
              />
              <input
                v-model="contactForm.email"
                type="email"
                placeholder="Masukkan alamat email Anda"
                required
              />
              <textarea
                v-model="contactForm.message"
                rows="4"
                placeholder="Tuliskan pesan atau pertanyaan Anda di sini"
                required
              ></textarea>
              <button type="submit">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

defineOptions({
  name: 'AcademyContact',
})

// Contact form
const contactForm = reactive({ name: '', email: '', message: '' })

function submitContact() {
  alert(
    `Terima kasih, ${contactForm.name}! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.`,
  )
  resetContact()
}

function resetContact() {
  contactForm.name = ''
  contactForm.email = ''
  contactForm.message = ''
}
</script>

<style scoped src="../styles/landing.css"></style>

<style scoped>
/* Hero Banner - Sporty Football Theme */
.hero-banner {
  position: relative;
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #4c1d95 100%);
  background-image:
    linear-gradient(135deg, rgba(124, 58, 237, 0.95) 0%, rgba(76, 29, 149, 0.95) 100%),
    url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  padding: 4rem 2rem;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.hero-banner::before {
  content: '⚽';
  position: absolute;
  font-size: 20rem;
  opacity: 0.05;
  right: -5rem;
  top: 50%;
  transform: translateY(-50%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(-50%) rotate(0deg);
  }
  50% {
    transform: translateY(-55%) rotate(10deg);
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: white;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0 0 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.6s ease-out 0.2s both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: 1.3rem;
  margin: 0 0 2.5rem;
  opacity: 0.95;
  font-weight: 500;
  animation: slideUp 0.6s ease-out 0.4s both;
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  animation: slideUp 0.6s ease-out 0.6s both;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 1.5rem;
}

/* Page Specific Styling */
.page {
  background: linear-gradient(180deg, #0a0514 0%, #1a0b2e 100%);
  min-height: 100vh;
}

.page .content-block {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin-top: -3rem;
  position: relative;
  z-index: 10;
}

/* Contact Content */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #7c3aed;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-item:hover {
  transform: translateX(10px);
  border-left-color: #a855f7;
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
}

.info-item h3 {
  color: #7c3aed;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.info-item p {
  color: #ffffff;
  line-height: 1.6;
  font-size: 1.05rem;
}

/* Contact Form */
.contact-form {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.contact-form input,
.contact-form textarea {
  padding: 1rem 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  color: #1f2937;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  font-weight: 500;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #7c3aed;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #9ca3af;
}

.contact-form button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.contact-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(109, 40, 217, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-features {
    gap: 1rem;
  }

  .feature-item {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
