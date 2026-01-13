import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: ['dev.agroerp.in'], // allow dev server
  },
  preview: {
    host: true,
    port: 5000,
    allowedHosts: ['dev.agroerp.in'], // allow preview server
  },
})
