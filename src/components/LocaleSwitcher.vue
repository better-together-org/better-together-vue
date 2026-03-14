<template>
  <BDropdown
    :text="currentLocale.label"
    variant="outline-light"
    size="sm"
    class="locale-switcher"
  >
    <BDropdownItem
      v-for="loc in locales"
      :key="loc.code"
      :active="locale === loc.code"
      @click="setLocale(loc.code)"
    >
      {{ loc.label }}
    </BDropdownItem>
  </BDropdown>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BDropdown, BDropdownItem } from 'bootstrap-vue-next'

const { locale } = useI18n()

const locales = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'uk', label: 'Українська' },
]

const currentLocale = computed(() => locales.find((l) => l.code === locale.value) || locales[0])

function setLocale(code) {
  locale.value = code
  localStorage.setItem('btv-locale', code)
}
</script>
