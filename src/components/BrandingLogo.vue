<template>
  <b-navbar-brand href="/">
    <img
      class="logo"
      src="../assets/better-together-logo.png"
      alt="Better Together"
    >
  </b-navbar-brand>
</template>

<script>
export default {
  name: 'BtBrandingLogo',
}
</script>

<style scoped lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_mixins.scss';

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
