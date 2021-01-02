<template>
  <footer
    id="footer"
    class="container-fluid"
  >
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <BtBrandingLogo class="m-auto" />
    </b-navbar>
  </footer>
</template>

<script>
import BtBrandingLogo from './BrandingLogo.vue'

export default {
  name: 'BtFooter',
  components: {
    BtBrandingLogo,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_mixins.scss';

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
