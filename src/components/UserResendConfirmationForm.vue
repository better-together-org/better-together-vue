<template>
  <vue-form-generator
    id="resend-confirmation-form"
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
import UserConfirmationFormSchema from '../forms/UserConfirmationFormSchema'
import toaster from '../mixins/toaster'

export default {
  name: 'UserResendConfirmationForm',
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
      schema: UserConfirmationFormSchema,
    }
  },
  computed: {
    localModel: {
      get() { return this.model },
      set(model) { this.$emit('input', model) },
    },
  },
  methods: {
    ...mapActions('authentication', ['resendConfirmation']),
    onValidated(isValid) {
      if (isValid) {
        this.resendConfirmation(this.model).then(() => {
          if (this.$route.path !== '/') {
            this.$router.push('/').then(() => {
              this.$toaster(
                `Please click on the account confirmation link emailed to ${this.model.user.email} to confirm your account.`,
                'info',
                {
                  title: 'Please check your email',
                  autoHideDelay: 6000,
                },
              )
            })
          }
        }).catch(({ response }) => {
          const errors = response.data.errors.email.join(', ')
          this.$toaster(
            `Email ${errors}`,
            'danger',
            {
              title: 'Confirmation Error',
            },
          )
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';

#resend-confirmation-form {
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
