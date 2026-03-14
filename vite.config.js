import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@bettertogether/community-engine-vue': path.resolve(
        __dirname,
        '../community-engine-vue/src/index.js',
      ),
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [],
  },
})
