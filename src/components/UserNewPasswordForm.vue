<template>
  <vue-form-generator
    id="new-password-form"
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
import UserNewPasswordFormSchema from '../forms/UserNewPasswordFormSchema'
import toaster from '../mixins/toaster'

export default {
  name: 'UserNewPasswordForm',
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
      schema: UserNewPasswordFormSchema,
    }
  },
  computed: {
    localModel: {
      get() { return this.model },
      set(model) { this.$emit('input', model) },
    },
  },
  methods: {
    ...mapActions('authentication', ['newPassword']),
    onValidated(isValid) {
      if (isValid) {
        this.newPassword(this.model).then(() => {
          if (this.$route.path !== '/') {
            this.$router.push('/users/sign-in').then(() => {
              this.$toaster(
                'You can now log in with your new password',
                'success',
                {
                  title: 'Your password has been changed',
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

#new-password-form {
  ::v-deep .help-block {
    margin-top: 5px;

    &.errors {
      color: theme-color('danger')
    }
  }
  ::v-deep .hint {
    margin-top: 5px;
  }
}
</style>
