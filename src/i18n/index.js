import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'
import es from './locales/es.json'
import uk from './locales/uk.json'

const SUPPORTED = ['en', 'fr', 'es', 'uk']
const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('btv-locale') : null
const browser = typeof navigator !== 'undefined' ? navigator.language?.split('-')[0] : 'en'
const locale = SUPPORTED.includes(stored) ? stored : SUPPORTED.includes(browser) ? browser : 'en'

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  availableLocales: SUPPORTED,
  globalInjection: true,
  messages: { en, fr, es, uk },
})
