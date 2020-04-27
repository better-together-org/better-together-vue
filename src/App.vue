<template>
  <div id="app">
    <BtNav />
    <router-view />
    <BtFooter />
  </div>
</template>

<script>
import BtNav from './components/Nav.vue'
import BtFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    BtNav,
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
}
</style>
