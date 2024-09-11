import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: "@", replacement: path.resolve('./src/')},
      {find: "@pages", replacement: path.resolve('./src/pages')},
      {find: "@components", replacement: path.resolve('./src/components')},
      {find: "@layout", replacement: path.resolve('./src/layout')}
    ]
  }
})
