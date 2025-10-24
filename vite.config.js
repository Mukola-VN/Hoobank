import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ВАЖЛИВО: заміни 'hoobank' на точну назву твого репозиторію,
// якщо вона відрізняється
export default defineConfig({
  base: '/hoobank/',
  plugins: [react()],
})