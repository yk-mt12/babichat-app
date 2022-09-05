import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  publicDir: '../public',
  server: {
    open: true,
  },
  build: {
    outDir: '../dist',
  },
  plugins: [react()],
})
