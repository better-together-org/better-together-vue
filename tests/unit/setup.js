import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import en from '../../src/i18n/locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: { en },
})

config.global.plugins = [i18n]
