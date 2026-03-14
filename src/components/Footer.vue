<template>
  <footer
    id="footer"
    class="container-fluid"
  >
    <BNavbar
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <BtBrandingLogo class="m-auto" />
    </BNavbar>
  </footer>
</template>

<script setup>
import { BNavbar } from 'bootstrap-vue-next'
import BtBrandingLogo from './BrandingLogo.vue'
</script>

<style scoped lang="scss">
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';

#footer {
  position: fixed;
  bottom: 0;
}

@include media-breakpoint-down(lg) {
  #footer {
    position: static;
    height: auto;
  }
}
</style>
