<template>
  <div class="page">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge">⚽ PERSITA AKADEMI</div>
        <h1 class="hero-title">Tentang Kami</h1>
        <p class="hero-subtitle">Membangun Pemain Sepak Bola Profesional Sejak 2010</p>
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
        <div class="about-content">
          <div class="about-text">
            <p>
              Persita Akademi adalah wadah pengembangan bakat sepak bola yang berkomitmen untuk
              mencetak pemain-pemain berbakat dan profesional. Kami menyediakan pelatihan
              berkualitas tinggi dengan fasilitas terbaik untuk mendukung pertumbuhan para atlet
              muda.
            </p>
            <p>
              Dengan pengalaman bertahun-tahun dalam dunia sepak bola, tim pelatih kami terdiri dari
              mantan pemain profesional dan pelatih berlisensi yang siap membimbing Anda menuju
              kesuksesan.
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
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AcademyAbout',
})
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
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin-top: -3rem;
  position: relative;
  z-index: 10;
}

/* About Content */
.about-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 1.5rem;
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

.about-stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.stat {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out;
}

.stat:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(124, 58, 237, 0.2);
  border-color: #7c3aed;
}

.stat strong {
  display: block;
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat span {
  font-size: 1rem;
  color: #e5e7eb;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .about-content {
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
