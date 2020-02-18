<template>
  <div id="app">
    <BtNav />
    <router-view />
  </div>
</template>

<script>
import BtNav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    BtNav,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
