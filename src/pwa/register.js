import { registerSW } from 'virtual:pwa-register'

export function setupServiceWorker() {
  if (import.meta.env.PROD) {
    registerSW({ immediate: false })
  }
}
