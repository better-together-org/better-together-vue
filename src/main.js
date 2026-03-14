import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import CommunityEngineVue from '@bettertogether/community-engine-vue'
import { i18n } from './i18n'
import router from './router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// TODO: Re-enable PWA with vite-plugin-pwa in Phase 7

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(CommunityEngineVue)

app.mount('#app')
