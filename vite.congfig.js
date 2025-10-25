import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/contronym/',  // 👈 this MUST match exactly the repo name
})

