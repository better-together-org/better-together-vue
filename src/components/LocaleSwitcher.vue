<template>
  <div class="locale-switcher d-flex align-items-center gap-1">
    <button
      v-for="loc in locales"
      :key="loc.code"
      class="btn btn-sm locale-btn"
      :class="locale === loc.code ? 'btn-light active' : 'btn-outline-light'"
      :aria-label="loc.label"
      :aria-pressed="locale === loc.code"
      @click="setLocale(loc.code)"
    >
      {{ loc.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const locales = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'uk', label: 'Українська' },
]

function setLocale(code) {
  locale.value = code
  localStorage.setItem('btv-locale', code)
}
</script>

<style scoped>
.locale-switcher {
  gap: 0.25rem;
}

.locale-btn {
  font-size: 0.7rem;
  padding: 0.15rem 0.4rem;
  font-weight: bold;
  letter-spacing: 0.03em;
  border-radius: 3px;
  line-height: 1.4;
}
</style>
