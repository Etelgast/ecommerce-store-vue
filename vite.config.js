import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': '/src'
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/app/assets/main.scss";`
      }
    }
  }
})
