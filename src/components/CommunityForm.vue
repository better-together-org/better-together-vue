<template>
  <vue-form-generator
    tag="div"
    :schema="schema"
    :model="localModel"
    rows="3"
    max-rows="6"
    :is-new-model="true"
  />
</template>

<script>
import VueFormGenerator from 'vue-form-generator'
import CommunityFormSchema from '../forms/CommunityFormSchema'

export default {
  name: 'CommunityForm',
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
      schema: CommunityFormSchema,
      name: '',
      description: '',
    }
  },
  computed: {
    localModel: {
      get() { return this.model },
      set(model) { this.$emit('input', model) },
    },
  },
}
</script>

<style scoped lang="scss">

</style>
