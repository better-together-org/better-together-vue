<template>
  <b-nav-item-dropdown
    v-if="isAuthenticated"
    id="user-dropdown"
    :text="currentUser.email"
    right
  >
    <b-dropdown-item
      @click="signOutAction"
    >
      Sign Out
    </b-dropdown-item>
  </b-nav-item-dropdown>
  <b-nav v-else>
    <b-nav-item
      to="/users/sign-in"
    >
      Sign In
    </b-nav-item>
    <b-nav-item
      to="/users/sign-up"
    >
      Sign Up
    </b-nav-item>
  </b-nav>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import toaster from '../mixins/toaster'

export default {
  name: 'NavUser',
  computed: {
    ...mapState('authentication', ['currentUser']),
    ...mapGetters('authentication', ['isAuthenticated']),
  },
  mixins: [toaster],
  methods: {
    ...mapActions('authentication', ['signOut']),
    signOutAction() {
      this.signOut().then(() => {
        if (this.$route.path !== '/') this.$router.push('/')
        this.$toaster('You are now signed out!', 'info')
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
</style>
