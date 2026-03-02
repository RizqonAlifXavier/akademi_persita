<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <h3>Pilih Metode Pembayaran</h3>
      <p>Jumlah: Rp {{ amount.toLocaleString('id-ID') }}</p>
      <div class="methods">
        <label v-for="m in methods" :key="m.id" class="method">
          <input type="radio" :value="m.id" v-model="selected" />
          <span>{{ m.name }}</span>
        </label>
      </div>
      <div class="actions">
        <button class="confirm" :disabled="!selected" @click="confirm">Konfirmasi & Bayar</button>
        <button class="cancel" @click="close">Batal</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  amount: { type: Number, required: true },
  methods: { type: Array as () => Array<{ id: string; name: string }>, default: () => [] }
})

const emit = defineEmits(['confirm', 'close'])
const selected = ref('')

function confirm() {
  emit('confirm', selected.value)
}

function close() {
  emit('close')
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.modal {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
.methods { display:flex; flex-direction:column; gap:0.5rem; margin:1rem 0 }
.method { display:flex; gap:0.75rem; align-items:center; padding:0.5rem; border-radius:8px; background:#f9fafb }
.actions { display:flex; gap:0.75rem; justify-content:flex-end }
.confirm { background:#10b981; color:white; border:none; padding:0.6rem 1rem; border-radius:8px }
.cancel { background:transparent; border:1px solid #e5e7eb; padding:0.5rem 0.9rem; border-radius:8px }
</style>
