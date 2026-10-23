import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // ye apni file wali line hi rakhein
import tailwindcss from '@tailwindcss/vite' // ye nayi line

export default defineConfig({
  plugins: [react(), tailwindcss()],        // tailwindcss() add karein
})