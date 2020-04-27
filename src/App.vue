<template>
  <div id="app">
    <BtNav />
    <BtMainContent />
    <BtFooter />
  </div>
</template>

<script>
import BtNav from './components/Nav.vue'
import BtMainContent from './components/MainContent.vue'
import BtFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    BtNav,
    BtMainContent,
    BtFooter,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  padding-bottom: 15vh;

  a {
    color: #42b983;

    &:hover {
      color: #42b983;
    }
  }

  header,
  footer {
    width: 100vw;
    height: 15vh;
    padding: 0;

    .navbar-nav {
      a {
        font-weight: bold;
        color: #ffffff;

        &.router-link-exact-active,
        &:hover {
          color: #42b983;
        }
      }

      li {
        margin-right: 5vw;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
