import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../AcademyLanding.vue'
import AboutView from '../views/About.vue'
import ServicesView from '../views/Services.vue'
import ContactView from '../views/Contact.vue'
import RegisterView from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingView },
    { path: '/about', component: AboutView },
    { path: '/services', component: ServicesView },
    { path: '/contact', component: ContactView },
    { path: '/register', component: RegisterView },
  ],
})

export default router
