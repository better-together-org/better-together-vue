<template>
  <div id="app">
    <BtNav />
    <BtMainContent />
  </div>
</template>

<script>
import BtNav from './components/Nav.vue'
import BtMainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    BtNav,
    BtMainContent,
  },
}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_mixins.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  a {
    color: #42b983;

    &:hover {
      color: #42b983;
    }
  }

  .btn-primary {
    color: #ffffff;
    background-color: #42b983;
    border-color: #42b983;

    &:hover, &:focus, &:active {
      color: #ffffff;
      background-color: #399f71;
      border-color: #399f71;
    }
  }

  header,
  footer {
    // width: 100vw;
    // height: 15vh;
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

      @include media-breakpoint-up(md) {
        li {
          margin-right: 5vw;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(lg) {
    header,
    footer {
      height: 10vh;
    }
  }
}
</style>
