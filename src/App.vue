<template>
  <div id="app">
    <BAlert
      v-if="updateAvailable"
      variant="info"
      class="pwa-update-banner mb-0 rounded-0 text-center"
      :model-value="true"
      dismissible
    >
      {{ t('btv.pwa.update_available') }}
      <BButton size="sm" variant="primary" class="ms-2" @click="applyUpdate">
        {{ t('btv.pwa.reload') }}
      </BButton>
    </BAlert>

    <BtHeader />

    <div v-if="canInstall" class="pwa-install-bar text-center py-2 bg-light border-bottom">
      <BButton size="sm" variant="outline-success" @click="install">
        {{ t('btv.pwa.install') }}
      </BButton>
      <BButton size="sm" variant="link" class="ms-1 text-muted" @click="dismiss">
        {{ t('btv.pwa.install_dismiss') }}
      </BButton>
    </div>

    <BtMainContent />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { BAlert, BButton } from 'bootstrap-vue-next'
import { BtHeader, BtMainContent, useMenuStore } from '@bettertogether/community-engine-vue'
import { useSwUpdate, useInstallPrompt } from './pwa/index.js'

const { t } = useI18n()
const menuStore = useMenuStore()

const { updateAvailable, applyUpdate } = useSwUpdate()
const { canInstall, install, dismiss } = useInstallPrompt()

onMounted(() => {
  menuStore.setHeaderMenuItems([
    {
      id: 0,
      external: false,
      label: t('btv.nav.about'),
      path: '/about',
      title: t('btv.nav.about_title'),
      sortOrder: 0,
    },
    {
      id: 1,
      external: false,
      label: t('btv.nav.projects'),
      path: '/projects',
      title: t('btv.nav.projects_title'),
      sortOrder: 1,
    },
    {
      id: 2,
      external: false,
      label: t('btv.nav.partners'),
      path: '/partners',
      title: t('btv.nav.partners_title'),
      sortOrder: 2,
    },
    {
      id: 3,
      external: false,
      label: t('btv.nav.opportunities'),
      path: '/opportunities',
      title: t('btv.nav.opportunities_title'),
      sortOrder: 3,
    },
    {
      id: 8,
      label: t('btv.nav.community_platforms'),
      path: '/community-platforms',
      title: t('btv.nav.community_platforms_title'),
      sortOrder: 4,
      children: [
        {
          id: 6,
          external: true,
          label: t('btv.nav.community_hub'),
          title: t('btv.nav.community_hub_title'),
          sortOrder: 1,
          url: 'https://hub.bebettertogether.ca/',
        },
        {
          id: 4,
          external: true,
          label: t('btv.nav.community_marketplace'),
          title: t('btv.nav.community_marketplace_title'),
          sortOrder: 2,
          url: 'https://marketplace.bebettertogether.ca/',
        },
        {
          id: 7,
          external: true,
          label: t('btv.nav.community_cloud'),
          title: t('btv.nav.community_cloud_title'),
          sortOrder: 3,
          url: 'https://cloud.bebettertogether.ca/',
        },
      ],
    },
    {
      id: 5,
      external: false,
      label: t('btv.nav.contact'),
      path: '/contact',
      title: t('btv.nav.contact_title'),
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
