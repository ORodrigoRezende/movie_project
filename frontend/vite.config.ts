import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remova o './' e deixe apenas '/' ou remova a linha 'base'
  base: '/', 
})