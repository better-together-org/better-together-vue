<template>
  <div id="app">
    <BtHeader />
    <BtMainContent />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { BtHeader, BtMainContent } from '@bettertogether/community-engine-vue'

export default {
  name: 'BtApp',
  components: {
    BtHeader,
    BtMainContent,
  },
  mounted() {
    this.setHeaderMenuItems([
      {
        id: 0,
        external: false,
        label: 'About',
        path: '/about',
        title: 'About our Community',
        sortOrder: 0,
      },
      {
        id: 1,
        external: false,
        label: 'Projects',
        path: '/projects',
        title: 'Our Community Projects',
        sortOrder: 1,
      },
      {
        id: 2,
        external: false,
        label: 'Partners',
        path: '/partners',
        title: 'Our Community Partners',
        sortOrder: 2,
      },
      {
        id: 3,
        external: false,
        label: 'Opportunities',
        path: '/opportunities',
        title: 'Our Community Opportunities',
        sortOrder: 3,
      },
      {
        id: 4,
        external: true,
        label: 'Marketplace',
        target: 'bt-marketplace',
        title: 'Our Community Marketplace',
        sortOrder: 4,
        url: 'https://marketplace.bebettertogether.ca/',
      },
      {
        id: 5,
        external: false,
        label: 'Contact',
        path: '/contact',
        title: 'Contact Our Community',
        sortOrder: 5,
      },
    ])
  },
  methods: {
    ...mapActions('CommunityEngine/Menus', ['setHeaderMenuItems']),
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
