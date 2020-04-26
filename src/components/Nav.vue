
<template>
  <div
    id="nav"
    class="container-fluid mb-4"
  >
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <BtBrandingLogo />

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
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
  </div>
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
  position: fixed;
  width: 100vw;
  top: 0;
  padding: 0;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active,
    &:hover {
      color: #42b983;
    }
  }
}
</style>
