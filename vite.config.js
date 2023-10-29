import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isCodeSandbox =
  'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
  },
})
