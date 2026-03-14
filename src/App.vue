<template>
  <div id="app">
    <BtHeader />
    <BtMainContent />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { BtHeader, BtMainContent, useMenuStore } from '@bettertogether/community-engine-vue'

const menuStore = useMenuStore()

onMounted(() => {
  menuStore.setHeaderMenuItems([
    {
      id: 0,
      external: false,
      label: 'About',
      path: '/about',
      title: 'About the Better Together Community',
      sortOrder: 0,
    },
    {
      id: 1,
      external: false,
      label: 'Projects',
      path: '/projects',
      title: 'Better Together Community Projects',
      sortOrder: 1,
    },
    {
      id: 2,
      external: false,
      label: 'Partners',
      path: '/partners',
      title: 'Better Together Community Partners',
      sortOrder: 2,
    },
    {
      id: 3,
      external: false,
      label: 'Opportunities',
      path: '/opportunities',
      title: 'Better Together Community Opportunities',
      sortOrder: 3,
    },
    {
      id: 8,
      label: 'Community Platforms',
      path: '/community-platforms',
      title: 'Better Together Community Platforms',
      sortOrder: 4,
      children: [
        {
          id: 6,
          external: true,
          label: 'Community Hub',
          title: 'Better Together Community Hub',
          sortOrder: 1,
          url: 'https://hub.bebettertogether.ca/',
        },
        {
          id: 4,
          external: true,
          label: 'Community Marketplace',
          title: 'Better Together Community Marketplace',
          sortOrder: 2,
          url: 'https://marketplace.bebettertogether.ca/',
        },
        {
          id: 7,
          external: true,
          label: 'Community Cloud',
          title: 'Better Together Community Cloud',
          sortOrder: 3,
          url: 'https://cloud.bebettertogether.ca/',
        },
      ],
    },
    {
      id: 5,
      external: false,
      label: 'Contact',
      path: '/contact',
      title: 'Contact the Better Together Community',
      sortOrder: 5,
    },
  ])
})
</script>

<style lang="scss">
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';
@import 'stylesheets/theme.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $default-text-color;

  a {
    color: $accent-color;
    &:hover { color: $accent-color; }
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
</style>
