import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows Docker to expose the network interface
    watch: {
      usePolling: true, // Forces Vite to actively check for file changes
    },
  },
})