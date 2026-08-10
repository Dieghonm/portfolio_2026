import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const REPO_NAME = 'portfolio_2026'

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
})
