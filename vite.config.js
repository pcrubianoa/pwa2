import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Directorio donde se colocarán los assets
    assetsInlineLimit: 4096, // Límite para inline assets en base64 (en bytes)
  },
  base: "/",
  rollupOptions: {
    input: {
      main: path.resolve(__dirname, 'src/main.jsx'),
    },
  }
})
