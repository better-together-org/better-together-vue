export default {
  methods: {
    $toaster(msg, type = null, opts = {}) {
      const options = {
        variant: type,
        solid: true,
        autoHideDelay: 2000,
        ...opts,
      }
      this.$bvToast.toast(
        msg,
        options,
      )
    },
  },
}
