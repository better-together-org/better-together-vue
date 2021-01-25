<template>
  <div id="resend-confirmation">
    <section>
      <h2>Resend your confirmation email</h2>
      <UserResendConfirmationForm :model="user" />
      <div>
        <b-link to="/users/sign-in">
          Already confirmed your account? Sign in!
        </b-link>
      </div>
      <div>
        <b-link to="/users/sign-up">
          Don't have an account? Sign up!
        </b-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import UserResendConfirmationForm from '../components/UserResendConfirmationForm.vue'
import toaster from '../mixins/toaster'

export default {
  name: 'UserResendConfirmation',
  components: {
    UserResendConfirmationForm,
  },
  mixins: [toaster],
  props: {
    confirmationToken: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      formValues: {},
    }
  },
  computed: {
    user() {
      return {}
    },
  },
  mounted() {
    this.confirmAccount()
  },
  methods: {
    ...mapActions('authentication', ['sendConfirmation']),
    confirmAccount() {
      if (!this.confirmationToken) return

      this.sendConfirmation({
        confirmation_token: this.confirmationToken,
      }).then(() => {
        this.$router.push('/users/sign-in').then(() => {
          this.$toaster(
            'You can now sign in.',
            'info',
            {
              title: 'Your account is confirmed',
            },
          )
        })
      }).catch(({ response }) => {
        let errors = 'There was an error'
        let fieldName = ''

        if (response.data.confirmation_token) {
          fieldName = 'Confirmation Token'
          errors = response.data.confirmation_token.join(', ')
        } else if (response.data.email) {
          fieldName = 'Email'
          errors = response.data.email.join(', ')
        }
        this.$toaster(
          `${fieldName} ${errors}`,
          'danger',
          {
            title: 'Confirmation Error',
            autoHideDelay: 6000,
          },
        )
      })
    },
  },
}
</script>

<style scoped lang="scss">
  @media (min-width: 992px) {
    #resend-confirmation {
      width: 50vw;
      margin: auto;

      section {
        padding: 10%;
      }
    }
  }

  .login-form {
    padding: 2em;
    border: 1px solid #a8a8a8;
    border-radius: .5em;
    max-width: 500px;
    box-sizing: border-box;
  }
  .form-title {
    margin-top: 0;
  }
  .login-form::v-deep .formulate-input .formulate-input-element {
    max-width: none;
  }
  @media (min-width: 420px) {
    .double-wide {
      display: flex;
    }
    .double-wide .formulate-input {
      flex-grow: 1;
      width: calc(50% - .5em);
    }
    .double-wide .formulate-input:first-child {
      margin-right: .5em;
    }
    .double-wide .formulate-input:last-child {
      margin-left: .5em;
    }
  }
</style>
