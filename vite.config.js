import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CHANGE 'contronym' to your repo name exactly
export default defineConfig({
  plugins: [react()],
  base: '/contronym/', 
})

