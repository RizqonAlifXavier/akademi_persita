<template>
  <div class="landing">
    <main>
      <section id="home" class="hero section">
        <div class="container">
          <h1>Welcome to Persita Akademi</h1>
          <p class="lead">Kembangkan Bakat Kalian bersama Persita Akademi</p>
          <div class="cta">
            <button class="alt" @click="scrollTo('about')">Pelajari Lebih Lanjut</button>
            <button class="alt" @click="scrollTo('contact')">Hubungi Kami</button>
          </div>
        </div>
      </section>

      <section id="about" class="section content-block">
        <div class="container">
          <div class="section-header">
            <h2>Tentang Kami</h2>
            <div class="section-divider"></div>
          </div>
          <div class="about-content">
            <div class="about-text">
              <p>
                Persita Akademi adalah wadah pengembangan bakat sepak bola yang berkomitmen untuk
                mencetak pemain-pemain berbakat dan profesional. Kami menyediakan pelatihan
                berkualitas tinggi dengan fasilitas terbaik untuk mendukung pertumbuhan para atlet
                muda.
              </p>
              <p>
                Dengan pengalaman bertahun-tahun dalam dunia sepak bola, tim pelatih kami terdiri
                dari mantan pemain profesional dan pelatih berlisensi yang siap membimbing Anda
                menuju kesuksesan.
              </p>
            </div>
            <div class="about-stats">
              <div class="stat">
                <strong>500+</strong>
                <span>Pemain Terlatih</span>
              </div>
              <div class="stat">
                <strong>10+</strong>
                <span>Tahun Pengalaman</span>
              </div>
              <div class="stat">
                <strong>15+</strong>
                <span>Turnamen Dimemenangkan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="section content-block">
        <div class="container">
          <div class="section-header">
            <h2>Program Kami</h2>
            <div class="section-divider"></div>
          </div>
          <div class="services-content">
            <div class="service-card">
              <div class="service-icon">🏆</div>
              <h3>Pelatihan Dasar</h3>
              <p>
                Mengembangkan keterampilan dasar sepak bola untuk pemula dengan fokus pada teknik
                fundamental, kebugaran, dan pemahaman permainan.
              </p>
              <ul class="service-features">
                <li>Teknik dasar passing & shooting</li>
                <li>Latihan kebugaran & agility</li>
                <li>Pemahaman taktik dasar</li>
              </ul>
              <button class="service-button">Pelajari Lebih Lanjut</button>
            </div>
            <div class="service-card">
              <div class="service-icon">⚽</div>
              <h3>Pelatihan Teknik & Taktik</h3>
              <p>
                Latihan intensif untuk meningkatkan teknik individu dan pemahaman strategi permainan
                dalam situasi kompetitif.
              </p>
              <ul class="service-features no-check">
                <li>Kontrol bola tingkat lanjut</li>
                <li>Taktik permainan posisional</li>
                <li>Latihan kecerdasan permainan</li>
              </ul>
              <button class="service-button">Pelajari Lebih Lanjut</button>
            </div>
            <div class="service-card">
              <div class="service-icon">🏅</div>
              <h3>Program Kompetisi</h3>
              <p>
                Persiapan intensif untuk turnamen dan kompetisi resmi dengan simulasi pertandingan
                dan mental training.
              </p>
              <ul class="service-features no-check">
                <li>Persiapan pertandingan</li>
                <li>Latihan kompetitif</li>
                <li>Coaching ketahanan mental</li>
              </ul>
              <button class="service-button">Pelajari Lebih Lanjut</button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section content-block">
        <div class="container">
          <div class="section-header">
            <h2>Hubungi Kami</h2>
            <div class="section-divider"></div>
          </div>
          <div class="contact-content">
            <div class="contact-info">
              <div class="info-item">
                <h3>📍 Lokasi</h3>
                <p>
                  Jl. Kelapa Puan Blok AF 1 no 1, West Pakulonan, Kelapa Dua,Tangerang Regency,<br />
                  Banten 15810
                </p>
              </div>
              <div class="info-item">
                <h3>📞 Telepon</h3>
                <p>+62</p>
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

      <section id="register" class="section content-block">
        <div class="container">
          <div class="section-header">
            <h2>Daftar Sekarang</h2>
            <div class="section-divider"></div>
          </div>
          <p
            style="
              color: #ffffff;
              font-size: 1.1rem;
              font-weight: 500;
              text-align: center;
              margin-bottom: 2rem;
            "
          >
            Bergabunglah dengan Persita Akademi dan kembangkan bakat sepak bola Anda!
          </p>
          <div class="register-cta">
            <RouterLink
              to="/register"
              class="cta-button primary"
              aria-label="Go to registration page"
              >Mulai Pendaftaran</RouterLink
            >
            <button
              type="button"
              @click="scrollTo('contact')"
              class="cta-button secondary"
              aria-label="Scroll to contact section"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Persita Akademi</h3>
            <p>Kembangkan bakat sepak bola Anda bersama kami</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Program</h4>
              <a @click="scrollTo('services')">Pelatihan Dasar</a>
              <a @click="scrollTo('services')">Teknik & Taktik</a>
              <a @click="scrollTo('services')">Kompetisi</a>
            </div>
            <div class="link-group">
              <h4>Kontak</h4>
              <a @click="scrollTo('contact')">Hubungi Kami</a>
              <a href="mailto:info@persitaakademi.com">Email</a>
              <RouterLink to="/register">Daftar</RouterLink>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <small>© {{ new Date().getFullYear() }} Persita Akademi — Built with Vue</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AcademyLanding',
})
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

// Contact form
const contactForm = reactive({ name: '', email: '', message: '' })

// Scroll throttling
const isScrolling = ref(false)

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

// Smooth scroll to section
function scrollTo(id: string) {
  if (isScrolling.value) {
    console.log('Scroll already in progress, ignoring')
    return
  }
  console.log('Attempting to scroll to section:', id)
  const el = document.getElementById(id)
  if (el) {
    console.log('Element found, scrolling to:', id)
    isScrolling.value = true
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => {
      isScrolling.value = false
    }, 800)
  } else {
    console.warn('Element not found for scrollTo:', id)
  }
}

// Intersection Observer for scroll animations
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Create Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'visible' class when element enters viewport
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
    },
  )

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll(
    '.stat, .service-card, .info-item, .contact-form, .about-text, .about-stats, .section',
  )

  const obs = observer
  if (obs) {
    animatableElements.forEach((el) => {
      el.classList.add('scroll-animate')
      obs.observe(el)
    })
  }
})

onUnmounted(() => {
  // Cleanup observer
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Root Variables - Purple Theme */
:root {
  --purple-primary: #7c3aed;
  --purple-dark: #6d28d9;
  --purple-light: #a855f7;
  --purple-lighter: #c084fc;
  --purple-accent: #9333ea;
  --bg-dark: #0f0a1f;
  --bg-darker: #0a0514;
  --text-light: #ffffff;
  --text-muted: #e5e7eb;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  background: linear-gradient(135deg, var(--bg-darker) 0%, var(--bg-dark) 100%);
  color: var(--text-light);
  overflow-x: hidden;
}

.landing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0a0514 0%, #1a0b2e 50%, #0f0a1f 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  animation: fadeIn 0.8s ease-out;
}

/* Scroll-triggered animations */
.scroll-animate {
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.scroll-animate.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger animation for multiple elements */
.scroll-animate:nth-child(1) {
  transition-delay: 0s;
}

.scroll-animate:nth-child(2) {
  transition-delay: 0.1s;
}

.scroll-animate:nth-child(3) {
  transition-delay: 0.2s;
}

.scroll-animate:nth-child(4) {
  transition-delay: 0.3s;
}

.scroll-animate:nth-child(5) {
  transition-delay: 0.4s;
}

.scroll-animate:nth-child(6) {
  transition-delay: 0.5s;
}

/* Hero Section */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(124, 58, 237, 0.15) 0%,
    rgba(109, 40, 217, 0.1) 50%,
    transparent 100%
  );
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
  animation: float 20s ease-in-out infinite;
}

.hero .container {
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffffff;
  animation: fadeInUp 1s ease-out;
  line-height: 1.2;
}

.hero .lead {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 2.5rem;
  animation: fadeInUp 1s ease-out 0.2s both;
  font-weight: 400;
}

/* CTA Buttons */
.cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.4s both;
}

button,
.cta-button {
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  position: relative;
  overflow: hidden;
}

button {
  background: linear-gradient(135deg, var(--purple-primary) 0%, var(--purple-accent) 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(124, 58, 237, 0.5);
}

button.alt {
  background: rgba(124, 58, 237, 0.2);
  border: 2px solid var(--purple-lighter);
  color: #ffffff;
  box-shadow: none;
}

button.alt:hover {
  background: rgba(124, 58, 237, 0.4);
  border-color: white;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
}

/* Sections */
.section {
  padding: 6rem 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease-out;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.section-divider {
  width: 100px;
  height: 5px;
  background: linear-gradient(90deg, var(--purple-primary), var(--purple-light));
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
}

/* About Section */
#about {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(10, 5, 20, 0.4) 100%);
  position: relative;
}

#about .container {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 4rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.2);
}

#about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.about-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.8s ease-out;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.stat {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(109, 40, 217, 0.1) 100%);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(124, 58, 237, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out;
}

.stat:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(124, 58, 237, 0.3);
  border-color: var(--purple-light);
}

.stat strong {
  display: block;
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat span {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
}

/* Services Section */
#services {
  background: linear-gradient(
    135deg,
    rgba(10, 5, 20, 0.4) 0%,
    rgba(124, 58, 237, 0.15) 50%,
    rgba(10, 5, 20, 0.4) 100%
  );
}

#services .container {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 4rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.2);
}

.services-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.service-card {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(109, 40, 217, 0.05) 100%);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease-out;
}

.service-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.4);
  border-color: var(--purple-light);
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(109, 40, 217, 0.1) 100%);
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: block;
  filter: drop-shadow(0 0 20px rgba(124, 58, 237, 0.5));
  animation: float 3s ease-in-out infinite;
}

.service-card h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.service-card p {
  color: #ffffff;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
}

.service-features li {
  color: #ffffff;
  margin-bottom: 0.75rem;
  padding-left: 2rem;
  position: relative;
  font-size: 1rem;
}

.service-features li::before {
  content: '⚽';
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.service-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--purple-primary) 0%, var(--purple-accent) 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.service-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.5);
}

/* Contact Section */
#contact {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(10, 5, 20, 0.4) 100%);
}

#contact .container {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 4rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.2);
}

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
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(109, 40, 217, 0.05) 100%);
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid var(--purple-primary);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out;
}

.info-item:hover {
  transform: translateX(10px);
  border-left-color: var(--purple-light);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
}

.info-item h3 {
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.info-item p {
  color: #ffffff;
  line-height: 1.6;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

.contact-form input,
.contact-form textarea {
  padding: 1rem 1.2rem;
  border: 2px solid rgba(124, 58, 237, 0.4);
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
  border-color: var(--purple-primary);
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #9ca3af;
}

.contact-form button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--purple-primary) 0%, var(--purple-accent) 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
}

.contact-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.5);
}

/* Register Section */
#register {
  background: linear-gradient(135deg, rgba(10, 5, 20, 0.4) 0%, rgba(124, 58, 237, 0.1) 100%);
}

#register .container {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 4rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.2);
  text-align: center;
}

.register-cta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.cta-button {
  padding: 1.25rem 3rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  font-size: 1.1rem;
}

.cta-button.primary {
  background: linear-gradient(135deg, var(--purple-primary) 0%, var(--purple-accent) 100%);
  color: white;
  border: 2px solid transparent;
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(124, 58, 237, 0.5);
}

.cta-button.secondary {
  background: rgba(124, 58, 237, 0.2);
  color: #ffffff;
  border: 2px solid var(--purple-lighter);
}

.cta-button.secondary:hover {
  background: rgba(124, 58, 237, 0.4);
  border-color: white;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
}

/* Footer */
.footer {
  background: linear-gradient(135deg, #1a0b2e 0%, #0f0a1f 100%);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(124, 58, 237, 0.2);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--purple-primary), transparent);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  color: #ffffff !important;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #ffffff !important;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.link-group h4 {
  color: #ffffff !important;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 700;
}

.link-group a {
  display: block;
  color: #ffffff !important;
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.link-group a:hover {
  color: #ffffff !important;
  transform: translateX(5px);
}

.footer-bottom {
  border-top: 1px solid rgba(124, 58, 237, 0.2);
  padding-top: 2rem;
  text-align: center;
}

.footer-bottom small {
  color: #ffffff !important;
  font-size: 0.95rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero .lead {
    font-size: 1.2rem;
  }

  .section {
    padding: 4rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .services-content {
    grid-template-columns: 1fr;
  }

  .cta {
    flex-direction: column;
    align-items: center;
  }

  .register-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }

  button,
  .cta-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  .service-card {
    padding: 2rem;
  }
}
</style>
