<template>
  <b-nav-item-dropdown
    id="user-dropdown"
    :text="dropdownText"
    right
  >
    <b-dropdown-item
      v-if="isAuthenticated"
      @click="signOutAction"
    >
      Sign Out
    </b-dropdown-item>
    <b-dropdown-item
      v-if="!isAuthenticated"
      to="/users/sign-in"
    >
      Sign In
    </b-dropdown-item>
    <b-dropdown-item
      v-if="!isAuthenticated"
      to="/users/sign-up"
    >
      Sign Up
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import toaster from '../mixins/toaster'

export default {
  name: 'NavUser',
  mixins: [toaster],
  computed: {
    ...mapState('authentication', ['currentUser']),
    ...mapGetters('authentication', ['isAuthenticated']),
    ...mapState('people', ['currentPerson']),
    ...mapGetters('people', ['hasCurrentPerson']),
    dropdownText() {
      if (this.isAuthenticated) {
        if (this.hasCurrentPerson) return this.currentPerson.name
        return this.currentUser.email
      }

      return 'Sign In'
    },
  },
  methods: {
    ...mapActions('authentication', ['signOut']),
    signOutAction() {
      this.signOut().then(() => {
        if (this.$route.path !== '/') {
          this.$router.push('/').then(() => {
            this.$toaster('You are now signed out!', 'info')
          })
        } else {
          this.$toaster('You are now signed out!', 'info')
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
  @import '../stylesheets/theme.scss';

  #user-dropdown {
    ::v-deep a.dropdown-item {
      color: $default-text-color;
      text-align: right;
    }
  }

  #mobile-collapse {
    #user-dropdown {
      ::v-deep .dropdown-menu {
        background-color: initial;

        a.dropdown-item {
          color: $default-text-color-bg-dark;
          text-align: center;

          &:hover,
          &.router-link-exact-active {
            color: $accent-color;
            background-color: initial
          }
        }
      }
    }
  }
</style>
