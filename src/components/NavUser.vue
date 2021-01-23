<template>
  <b-nav-item-dropdown
    v-if="isAuthenticated"
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

export default {
  name: 'NavUser',
  computed: {
    ...mapState('authentication', ['currentUser']),
    ...mapGetters('authentication', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('authentication', ['signOut']),
    signOutAction() {
      this.signOut().then(() => {
        if (this.$route.path !== '/') this.$router.push('/')
      })
    },
  },
}
</script>

<style scoped lang="scss">

</style>
