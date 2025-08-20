import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/hexVue2025week2/', // 這裡要寫 repo 名稱
})
