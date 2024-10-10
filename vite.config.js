import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/variables.scss";', // 导入全局scss变量
        api: "modern-compiler" // 修复警告: Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
    },
  },
})
