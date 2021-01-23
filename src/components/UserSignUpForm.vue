<template>
  <vue-form-generator
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
import UserSignUpFormSchema from '../forms/UserSignUpFormSchema'

export default {
  name: 'UserSignUpForm',
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      schema: UserSignUpFormSchema,
    }
  },
  computed: {
    localModel: {
      get() { return this.model },
      set(model) { this.$emit('input', model) },
    },
  },
  methods: {
    ...mapActions('authentication', ['signUp']),
    onValidated(isValid) {
      if (isValid) {
        console.log('submit form', this.model)
        this.signUp(this.model)
      }
    },
  },
}
</script>

<style scoped lang="scss">

</style>
