<template>
  <div id="communities">
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>Communities</h2>
        </div>
      </div>
    </section>
    <b-card-group deck>
      <b-card
        v-for="community in communities"
        :key="community.id"
        :title="community.name"
      >
        <b-card-text>
          {{ community.description }}
        </b-card-text>
<!--         <b-button
          href="#"
          variant="primary"
        >
          Go somewhere
        </b-button> -->
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Communities',
  computed: {
    ...mapState('communities', ['communities']),
  },
  mounted() {
    this.getCommunities()
  },
  methods: {
    ...mapActions('communities', ['getCommunities']),
  },
}
</script>

<style scoped lang="scss">

</style>
