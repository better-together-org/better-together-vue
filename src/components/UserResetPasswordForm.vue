<template>
  <vue-form-generator
    id="reset-password-form"
    tag="div"
    :schema="schema"
    :model="localModel"
    rows="3"
    max-rows="6"
    @validated="onValidated"
  />
</template>

<script>
import { mapActions } from 'vuex'
import VueFormGenerator from 'vue-form-generator'
import UserResetPasswordFormSchema from '../forms/UserResetPasswordFormSchema'
import toaster from '../mixins/toaster'

export default {
  name: 'UserSigninForm',
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  mixins: [toaster],
  props: {
    model: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      schema: UserResetPasswordFormSchema,
    }
  },
  computed: {
    localModel: {
      get() { return this.model },
      set(model) { this.$emit('input', model) },
    },
  },
  methods: {
    ...mapActions('authentication', ['resetPassword']),
    onValidated(isValid) {
      if (isValid) {
        this.resetPassword(this.model).then(() => {
          if (this.$route.path !== '/') {
            this.$router.push('/').then(() => {
              this.$toaster(
                `Please click on the reset password link emailed to ${this.model.email} to set a new password.`,
                'info',
                {
                  title: 'Please check your email',
                  autoHideDelay: 6000,
                  toaster: 'b-toaster-top-center',
                },
              )
            })
          }
        }).catch((response) => {
          console.log(response)
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';

#reset-password-form {
  ::v-deep .help-block {
    margin-top: 5px;

    &.errors {
      color: theme-color('danger')
    }
  }
  .hint {
    margin-top: 5px;
  }
}
</style>
