
<template>
  <div id="nav" class="container mb-4">
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
    >
      <b-navbar-brand href="#">
        Better Together Kindness Accelerator
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
            >About</b-nav-item>
          <b-nav-item
            to="/projects"
            >Projects</b-nav-item>
          <b-nav-item
            to="/partners"
            >Partners</b-nav-item>
          <b-nav-item
            to="/contact"
            >Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'BtNav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
