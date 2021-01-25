<template>
  <vue-form-generator
    id="sign-in-form"
    tag="form"
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
import UserSignInFormSchema from '../forms/UserSignInFormSchema'
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
      schema: UserSignInFormSchema,
    }
  },
  computed: {
    localModel: {
      get() { return this.model },
      set(model) { this.$emit('input', model) },
    },
  },
  methods: {
    ...mapActions('authentication', ['signIn']),
    ...mapActions('people', ['getMe']),
    onValidated(isValid) {
      if (isValid) {
        this.signIn(this.model).then(() => {
          if (this.$route.path !== '/') {
            this.$router.push('/').then(() => {
              this.$toaster('You are now signed in!', 'success')
              this.getMe().then((response) => {
                console.log(response)
              }).catch((err) => {
                console.log(err)
              })
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

#sign-in-form {
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
