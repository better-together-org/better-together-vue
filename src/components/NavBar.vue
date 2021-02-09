<template>
  <b-navbar-nav
    :class="navbarClass"
    pills
    align="center"
  >
    <b-nav-item
      :class="navitemClass"
      to="/"
      title="Community Homepage"
    >
      Home
    </b-nav-item>
    <b-nav-item
      :class="navitemClass"
      to="/about"
      title="About Our Community"
    >
      About
    </b-nav-item>
    <b-nav-item
      :class="navitemClass"
      to="/projects"
      title="Community Projects"
    >
      Projects
    </b-nav-item>
    <b-nav-item
      :class="navitemClass"
      to="/partners"
      title="Community Partners"
    >
      Partners
    </b-nav-item>
    <b-nav-item
      :class="navitemClass"
      to="/opportunities"
      title="Community Opportunities"
    >
      Opportunities
    </b-nav-item>
    <b-nav-item
      :class="navitemClass"
      href="https://marketplace.bebettertogether.ca/"
      title="Community Marketplace"
    >
      Marketplace
    </b-nav-item>
    <b-nav-item
      :class="navitemClass"
      to="/contact"
      title="Contact our Community"
    >
      Contact
    </b-nav-item>
    <!-- <BtNavUser /> -->
  </b-navbar-nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navbarClass: {
      type: String,
      default: '',
    },
    navitemClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
  .center {
    text-align: center;
  }
</style>
