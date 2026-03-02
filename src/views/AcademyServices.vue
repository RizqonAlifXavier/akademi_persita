<template>
  <div class="page">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge">⚽ PERSITA AKADEMI</div>
        <h1 class="hero-title">Program & Layanan Akademi</h1>
        <p class="hero-subtitle">
          Jelajahi berbagai program pelatihan dan layanan yang kami tawarkan untuk mengembangkan
          bakat sepak bola Anda
        </p>
        <div class="hero-features">
          <div class="feature-item">
            <span class="feature-icon">🏆</span>
            <span>Program Lengkap</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚽</span>
            <span>Pelatih Profesional</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🎯</span>
            <span>Fasilitas Terbaik</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section id="services" class="section content-block">
      <div class="container">
        <div class="section-header">
          <h2>Program Kami</h2>
          <div class="section-divider"></div>
          <p class="section-description">
            Pilih program pelatihan yang sesuai dengan tingkat kemampuan dan tujuan Anda
          </p>
        </div>
        <div class="services-content">
          <div class="service-card">
            <div class="service-icon">🏆</div>
            <h3>Pelatihan Dasar</h3>
            <p>
              Program pengembangan fundamental sepak bola untuk pemula dengan fokus pada teknik
              dasar dan kebugaran fisik.
            </p>
            <ul class="service-features">
              <li>✓ Teknik dasar passing & shooting</li>
              <li>✓ Latihan kebugaran & kelincahan</li>
              <li>✓ Pemahaman taktik permainan</li>
              <li>✓ Sertifikat kelulusan</li>
            </ul>
            <RouterLink to="/register" class="service-btn primary">Daftar Sekarang</RouterLink>
          </div>
          <div class="service-card">
            <div class="service-icon">⚽</div>
            <h3>Pelatihan Teknik & Taktik</h3>
            <p>
              Program intensif untuk meningkatkan kemampuan teknis dan pemahaman taktik dalam
              situasi pertandingan kompetitif.
            </p>
            <ul class="service-features">
              <li>✓ Teknik kontrol bola lanjutan</li>
              <li>✓ Strategi permainan posisional</li>
              <li>✓ Latihan kecerdasan taktik</li>
              <li>✓ Analisis pertandingan</li>
              <li>✓ Pelatihan mental</li>
            </ul>
            <RouterLink to="/register" class="service-btn secondary">Daftar Sekarang</RouterLink>
          </div>
          <div class="service-card">
            <div class="service-icon">🏅</div>
            <h3>Program Kompetisi</h3>
            <p>
              Persiapan khusus untuk turnamen dan kompetisi resmi dengan pendekatan profesional dan
              pelatihan mental.
            </p>
            <ul class="service-features">
              <li>✓ Persiapan pertandingan intensif</li>
              <li>✓ Latihan kompetitif harian</li>
              <li>✓ Coaching psikologis</li>
              <li>✓ Turnamen internal</li>
              <li>✓ Pemeriksaan kesehatan rutin</li>
              <li>✓ Garansi perkembangan</li>
            </ul>
            <RouterLink to="/register" class="service-btn secondary">Daftar Sekarang</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities Section -->
    <section id="facilities" class="section content-block">
      <div class="container">
        <div class="section-header">
          <h2>Fasilitas & Sarana</h2>
          <div class="section-divider"></div>
        </div>
        <div class="facilities-content">
          <div class="facility-card">
            <div class="facility-icon">⚽</div>
            <h3>Lapangan Standar</h3>
            <p>
              Lapangan sepak bola berstandar internasional dengan rumput sintetis berkualitas tinggi
              untuk latihan optimal.
            </p>
          </div>
          <div class="facility-card">
            <div class="facility-icon">🏋️</div>
            <h3>Fitness Center</h3>
            <p>
              Fasilitas gym lengkap dengan peralatan modern untuk meningkatkan kekuatan dan
              kebugaran atlet.
            </p>
          </div>
          <div class="facility-card">
            <div class="facility-icon">🏥</div>
            <h3>Klinik Kesehatan</h3>
            <p>
              Layanan kesehatan 24/7 dengan dokter spesialis olahraga dan fisioterapis profesional.
            </p>
          </div>
          <div class="facility-card">
            <div class="facility-icon">📚</div>
            <h3>Ruang Teori</h3>
            <p>
              Ruang kelas modern dengan teknologi audiovisual untuk pembelajaran taktik dan strategi
              permainan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Coaches Section -->
    <section id="coaches" class="section content-block">
      <div class="container">
        <div class="section-header">
          <h2>Tim Pelatih</h2>
          <div class="section-divider"></div>
        </div>
        <div class="coaches-content">
          <div class="coach-card">
            <div class="coach-avatar">👨‍🏫</div>
            <h3>Ahmad Rahman</h3>
            <p class="coach-title">Pelatih Kepala</p>
            <p>
              Mantan pemain profesional dengan pengalaman 15+ tahun di dunia sepak bola
              internasional.
            </p>
          </div>
          <div class="coach-card">
            <div class="coach-avatar">👩‍🏫</div>
            <h3>Sari Dewi</h3>
            <p class="coach-title">Pelatih Teknik</p>
            <p>
              Spesialis teknik individu dengan gelar master dalam ilmu keolahragaan dari universitas
              terkemuka.
            </p>
          </div>
          <div class="coach-card">
            <div class="coach-avatar">👨‍⚕️</div>
            <h3>Dr. Budi Santoso</h3>
            <p class="coach-title">Fisioterapis</p>
            <p>Dokter spesialis olahraga dengan fokus pada pencegahan cedera dan recovery atlet.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Section -->
    <section id="schedule" class="section content-block">
      <div class="container">
        <div class="section-header">
          <h2>Jadwal Latihan</h2>
          <div class="section-divider"></div>
          <p class="section-description">
            Berikut adalah jadwal rutin latihan setiap minggunya di Persita Akademi
          </p>
        </div>
        <div class="schedule-container">
          <div class="schedule-table-wrapper">
            <table class="schedule-table">
              <thead>
                <tr>
                  <th>Grup / Kategori</th>
                  <th>Hari</th>
                  <th>Waktu (WIB)</th>
                  <th>Lokasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Grup A (U8 - U12)</strong></td>
                  <td>Senin & Kamis</td>
                  <td>16:00 - 18:00</td>
                  <td>Main Field A</td>
                </tr>
                <tr>
                  <td><strong>Grup B (U13 - U17)</strong></td>
                  <td>Selasa & Jumat</td>
                  <td>16:00 - 18:00</td>
                  <td>Main Field B</td>
                </tr>
                <tr>
                  <td><strong>Grup C (Khusus Kiper)</strong></td>
                  <td>Rabu & Sabtu</td>
                  <td>16:00 - 18:00</td>
                  <td>Training Area</td>
                </tr>
                <tr>
                  <td><strong>Grup D (Umum/Hobi)</strong></td>
                  <td>Minggu</td>
                  <td>08:00 - 10:00</td>
                  <td>Main Field A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="section content-block">
      <div class="container">
        <div class="section-header">
          <h2>Paket & Harga</h2>
          <div class="section-divider"></div>
          <p class="section-description">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda untuk mendapatkan pelatihan
            terbaik
          </p>
        </div>
        <div class="pricing-content">
          <div class="pricing-card">
            <h3>Paket Basic</h3>
            <div class="price">Rp 800.000<span>/bulan</span></div>
            <ul>
              <li>✓ Latihan 1x seminggu</li>
              <li>✓ Program pelatihan dasar</li>
              <li>✓ Jersey akademi</li>
              <li>✓ Panduan nutrisi</li>
              <li>✓ Sertifikat kelulusan</li>
            </ul>
            <RouterLink to="/register" class="pricing-btn">Pilih Paket</RouterLink>
          </div>
          <div class="pricing-card featured">
            <div class="badge">Paling Populer</div>
            <h3>Paket Premium</h3>
            <div class="price">Rp 1.500.000<span>/bulan</span></div>
            <ul>
              <li>✓ Latihan 2x seminggu</li>
              <li>✓ Semua program pelatihan</li>
              <li>✓ Fisioterapi rutin</li>
              <li>✓ Suplemen nutrisi</li>
              <li>✓ Private coaching</li>
              <li>✓ Analisis performa</li>
            </ul>
            <RouterLink to="/register" class="pricing-btn">Pilih Paket</RouterLink>
          </div>
          <div class="pricing-card">
            <h3>Paket Elite</h3>
            <div class="price">Rp 2.000.000<span>/bulan</span></div>
            <ul>
              <li>✓ Latihan harian intensif</li>
              <li>✓ Program pelatihan lengkap</li>
              <li>✓ Pemeriksaan kesehatan rutin</li>
              <li>✓ Personal trainer dedicated</li>
              <li>✓ Prioritas turnamen</li>
              <li>✓ Garansi perkembangan</li>
            </ul>
            <RouterLink to="/register" class="pricing-btn">Pilih Paket</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineOptions({
  name: 'AcademyServices',
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
  margin: 3rem 0;
  position: relative;
}

.page .content-block:first-of-type {
  margin-top: -3rem;
  z-index: 10;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-divider {
  width: 100px;
  height: 5px;
  background: linear-gradient(90deg, #7c3aed, #6d28d9);
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
}

.section-description {
  color: #e5e7eb;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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

/* Services Content Grid */
.services-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  align-items: stretch;
}

/* Enhanced Service Cards */
.service-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.8s ease-out;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #7c3aed, #a855f7);
}

.service-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.3);
  border-color: #7c3aed;
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  animation: floatIcon 3s ease-in-out infinite;
}

@keyframes floatIcon {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.service-card h3 {
  color: #ffffff;
  margin-bottom: 0.75rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
}

.service-card p {
  color: #e5e7eb;
  line-height: 1.6;
  margin-bottom: 1.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  flex-grow: 1;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem 0;
  text-align: left;
  width: 100%;
}

.service-features li {
  color: #e5e7eb;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
  padding-left: 1.5rem;
  position: relative;
}

.service-features li::before {
  content: '✓';
  color: #a855f7;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.1rem;
}

.service-btn {
  padding: 1rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  width: 100%;
  font-size: 1rem;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: auto;
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.service-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(109, 40, 217, 0.5);
}

/* Facilities Content */
.facilities-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.facility-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.8s ease-out;
}

.facility-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(124, 58, 237, 0.25);
  border-color: #7c3aed;
}

.facility-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.facility-card h3 {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.facility-card p {
  color: #e5e7eb;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 500;
}

/* Coaches Content */
.coaches-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.coach-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.8s ease-out;
}

.coach-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(124, 58, 237, 0.25);
  border-color: #7c3aed;
}

.coach-avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
}

.coach-card h3 {
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.coach-title {
  color: #a855f7;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.coach-card p {
  color: #e5e7eb;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 500;
}

/* Pricing Content */
.pricing-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  align-items: stretch;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: fadeInUp 0.8s ease-out;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(124, 58, 237, 0.25);
  border-color: #7c3aed;
}

.pricing-card.featured {
  border-color: #7c3aed;
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.3);
  transform: scale(1.05);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}

.badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
}

.pricing-card h3 {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #a855f7;
  margin-bottom: 1.5rem;
}

.price span {
  font-size: 1rem;
  font-weight: 400;
  color: #e5e7eb;
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
}

.pricing-card li {
  color: #e5e7eb;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  font-weight: 500;
}

.pricing-card li::before {
  content: '✓';
  color: #7c3aed;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.pricing-btn {
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  text-decoration: none;
  display: inline-block;
}

.pricing-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(109, 40, 217, 0.5);
}

/* Responsive adjustments */
/* Schedule Section Styles */
.schedule-container {
  margin-top: 2rem;
  padding: 1rem;
}

.schedule-table-wrapper {
  overflow-x: auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
  min-width: 600px;
}

.schedule-table th,
.schedule-table td {
  padding: 1.5rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.schedule-table th {
  background: rgba(124, 58, 237, 0.2);
  color: #a855f7;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.schedule-table tr:last-child td {
  border-bottom: none;
}

.schedule-table td strong {
  color: #a855f7;
}

.schedule-table tr:hover td {
  background: rgba(255, 255, 255, 0.05);
  transition: background 0.3s ease;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-features {
    gap: 1rem;
  }

  .feature-item {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .page .content-block {
    margin: 2rem 0;
    padding: 2rem 0;
  }

  .services-content,
  .facilities-content,
  .coaches-content,
  .pricing-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }

  .pricing-card.featured {
    transform: none;
  }

  .pricing-card.featured:hover {
    transform: translateY(-5px);
  }

  .service-card h3 {
    font-size: 1.4rem;
  }

  .service-icon {
    font-size: 3rem;
  }
}
</style>
