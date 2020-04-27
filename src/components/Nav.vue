
<template>
  <header
    id="nav"
    class="container-fluid"
  >
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <b-collapse
        id="nav-collapse"
        is-nav
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

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
        is-nav
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
#nav {
}
</style>
