<template>
  <header
    id="nav"
    class=""
  >
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
    >
      <b-collapse
        id="left-collapse"
        is-nav
        invisible
      >
        <b-navbar-nav
          class="ml-auto"
          pills
          align="center"
        >
          <b-nav-item
            to="/about"
          >
            About
          </b-nav-item>
          <b-nav-item
            to="/projects"
          >
            Projects
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <BtBrandingLogo />

      <b-navbar-toggle target="mobile-collapse" />

      <b-collapse
        id="right-collapse"
        is-nav
        invisible
      >
        <b-navbar-nav
          class="mr-auto"
          pills
          align="center"
        >
          <b-nav-item
            to="/partners"
          >
            Partners
          </b-nav-item>
          <b-nav-item
            to="/contact"
          >
            Contact
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-collapse
        id="mobile-collapse"
        is-nav
      >
        <b-navbar-nav
          class="m-auto d-block d-lg-none"
          pills
          align="center"
        >
          <b-nav-item
            to="/about"
          >
            About
          </b-nav-item>
          <b-nav-item
            to="/projects"
          >
            Projects
          </b-nav-item>
          <b-nav-item
            to="/partners"
          >
            Partners
          </b-nav-item>
          <b-nav-item
            to="/contact"
          >
            Contact
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import BtBrandingLogo from './BrandingLogo.vue'

export default {
  name: 'BtNav',
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

#nav {
  .navbar {
    z-index: 1000;
  }

  #mobile-collapse.show {
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
