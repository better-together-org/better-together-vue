import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { existsSync } from 'node:fs'

// Local sibling checkout takes priority for dev hot-reload; CI uses the npm package.
const cevLocalPath = path.resolve(__dirname, '../community-engine-vue/src/index.js')
// When loading CEV from local sibling, force shared deps to resolve from BTV's node_modules.
// dedupe alone is not sufficient for bare imports inside sibling directories.
const cevAlias = existsSync(cevLocalPath)
  ? {
      '@bettertogether/community-engine-vue': cevLocalPath,
      'vue-router': path.resolve(__dirname, 'node_modules/vue-router'),
      'vue': path.resolve(__dirname, 'node_modules/vue'),
      'pinia': path.resolve(__dirname, 'node_modules/pinia'),
      'vue-i18n': path.resolve(__dirname, 'node_modules/vue-i18n'),
      'bootstrap-vue-next': path.resolve(__dirname, 'node_modules/bootstrap-vue-next'),
    }
  : {}

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false, // we use public/manifest.webmanifest
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            // CE Rails JSON:API — skip auth routes (mirrors getCevWorkboxConfig)
            urlPattern: /\/bt\/api\/(?!auth\/).*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'ce-api-cache',
              networkTimeoutSeconds: 5,
              expiration: { maxAgeSeconds: 60 * 60 * 24 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Images and user uploads
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'ce-image-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 7 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Web fonts — serve cached immediately, refresh in background
            urlPattern: /\.(?:woff|woff2|ttf|otf|eot)$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'ce-font-cache',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      ...cevAlias,
    },
    // Force single instances of shared deps when CEV is resolved from its local src
    dedupe: ['vue', 'pinia', 'vue-router', 'vue-i18n', 'bootstrap-vue-next'],
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
    setupFiles: ['./tests/unit/setup.js'],
  },
})
