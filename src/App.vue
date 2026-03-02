<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { RouterView, RouterLink } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)

const menu = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
  { path: '/register', label: 'Registrations' },
]

const isActive = (path: string) => route.path === path
</script>

<template>
  <div>
    <header class="site-header" :class="{ open: mobileOpen }">
      <div class="brand">
        <div class="logo-box">
          <img src="/brand-logo-persita.png" alt="logo" class="logo" />
        </div>
        <span class="brand-text">Persita Akademi</span>
      </div>

      <nav class="main-nav" @click="mobileOpen = false">
        <RouterLink
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          :class="{ active: isActive(item.path) }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <div class="social-icons">
        <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
        <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
      </div>

      <button class="hamburger" aria-label="Toggle menu" @click="mobileOpen = !mobileOpen">
        <span :class="{ active: mobileOpen }"></span>
        <span :class="{ active: mobileOpen }"></span>
        <span :class="{ active: mobileOpen }"></span>
      </button>
    </header>

    <RouterView />
  </div>
</template>

<style scoped src="./styles/landing.css"></style>
