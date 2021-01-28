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
  name: 'BtApp',
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
@import 'stylesheets/theme.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $default-text-color;

  a {
    color: $accent-color;

    &:hover {
      color: $accent-color;
    }
  }

  .btn-primary {
    color: $default-text-color-bg-dark;
    background-color: $accent-color;
    border-color: $accent-color;

    &:hover, &:focus, &:active {
      color: $default-text-color-bg-dark;
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
        color: $default-text-color-bg-dark;

        &.router-link-exact-active,
        &:hover {
          color: $accent-color;
        }
      }

      @include media-breakpoint-up(md) {
        li.nav-item {
          margin-right: 1vw;

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

.b-toaster.b-toaster-top-center .b-toaster-slot,
.b-toaster.b-toaster-top-right .b-toaster-slot, {
  top: 10vh;
}
</style>
