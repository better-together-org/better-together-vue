<template>
  <header
    id="nav"
    class="container"
  >
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
    >
      <BrandingLogo />
      <b-navbar-toggle target="mobile-collapse" />
      <b-collapse
        id="right-collapse"
        is-nav
        invisible
      >
        <NavBar navbar-class="ml-auto justify-content-center" />
      </b-collapse>

      <b-collapse
        id="mobile-collapse"
        is-nav
      >
        <NavBar
          navbar-class="m-auto d-block d-lg-none"
          navitem-class="center"
        />
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import BrandingLogo from './BrandingLogo.vue'
import NavBar from './NavBar.vue'

export default {
  name: 'Nav',
  components: {
    BrandingLogo,
    NavBar,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_mixins.scss';

#nav {
  .navbar {
    z-index: 1000;
  }

  #mobile-collapse {
    li {
      text-align: center;
    }
  }

  @include media-breakpoint-up(md) {
    #mobile-collapse {
      display: none !important;
    }
  }

  .navbar-toggler >>> .navbar-toggler-icon {
    width: 1em;
    height: 1em;
  }
}
</style>
