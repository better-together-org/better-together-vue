<template>
  <div id="sign-in">
    <section>
      <h2>Sign In</h2>
      <UserSignInForm :model="user" />
      <div>
        <b-link to="/users/sign-up">
          Don't have an account? Sign up!
        </b-link>
      </div>
      <div>
        <b-link to="/users/password/reset">
          Forgot your password? Reset it!
        </b-link>
      </div>
      <div>
        <b-link to="/users/confirmation/resend">
          Didn't receive your account confirmation email? Resend it!
        </b-link>
      </div>
    </section>
  </div>
</template>

<script>
import UserSignInForm from '../components/UserSignInForm.vue'

export default {
  name: 'UsersSignIn',
  components: {
    UserSignInForm,
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
}
</script>

<style scoped lang="scss">
  @media (min-width: 992px) {
    #sign-in {
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
