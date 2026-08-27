import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  define: { __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()) },
  build: { copyPublicDir: !isSsrBuild, assetsInlineLimit: 0 },
}))
