import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Crisalida/',   // 👈 IMPORTANTE: coincide con el nombre del repo
  build: { outDir: 'docs' }  // 👈 GitHub Pages publicará desde /docs
})
