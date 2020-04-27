
<template>
  <footer
    id="footer"
    class="mt-4 container-fluid"
  >
    <b-navbar
      id="footer-navbar"
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <BtBrandingLogo />

      <b-navbar-toggle target="footer-collapse" />

      <b-collapse
        id="footer-collapse"
        is-nav
      >
        <b-navbar-nav
          class="ml-auto"
          pills
          align="right"
        >
          <b-nav-item
            :to="'/'"
          >
            Home
          </b-nav-item>
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
#footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 0;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active,
    &:hover {
      color: #42b983;
    }
  }
}
</style>
