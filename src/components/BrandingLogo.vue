<template>
  <BNavbarBrand href="/">
    <img
      class="logo"
      src="../assets/better-together-logo.png"
      :alt="t('btv.app.title')"
    >
  </BNavbarBrand>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { BNavbarBrand } from 'bootstrap-vue-next'

const { t } = useI18n()
</script>

<style scoped lang="scss">
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';

.logo {
  height: 10vh;
}
.navbar-brand {
  margin-right: 5vw;
}

@include media-breakpoint-down(lg) {
  .logo {
    height: 7vh;
  }
}
</style>
