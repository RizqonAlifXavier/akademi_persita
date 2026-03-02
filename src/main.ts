import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Midtrans Snap type declaration
declare global {
  interface Window {
    snap: {
      pay: (token: string, options?: any) => void
    }
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Dynamically load Midtrans Snap script with client key from env
if (typeof window !== 'undefined') {
  try {
    const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY || ''
    const isProd = import.meta.env.VITE_MIDTRANS_IS_PRODUCTION === 'true' || false
    const script = document.createElement('script')
    script.src = isProd ? 'https://app.midtrans.com/snap/snap.js' : 'https://app.sandbox.midtrans.com/snap/snap.js'
    if (clientKey) script.setAttribute('data-client-key', clientKey)
    script.async = true
    document.body.appendChild(script)
  } catch (e) {
    // ignore during SSR or if DOM not available
    // console.warn('Could not load Midtrans Snap script dynamically', e)
  }
}

app.mount('#app')
