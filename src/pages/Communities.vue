<template>
  <div id="communities">
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>Communities</h2>
        </div>
      </div>
    </section>
    <b-card-group columns>
      <b-card
        title="Add your community!"
      >
        <b-card-text>
          Are you a community organizer? Add your community to our listing!
        </b-card-text>
        <b-button
          v-b-modal.new-community-modal
          variant="primary"
        >
          Add Community
        </b-button>
      </b-card>
      <b-card
        v-for="community in communities"
        :key="community.id"
        :title="community.name"
      >
        <b-card-text>
          {{ community.description }}
        </b-card-text>
      </b-card>
    </b-card-group>

    <b-modal
      id="new-community-modal"
      title="Add your community"
      @ok.prevent="createCommunity"
    >
      <p class="my-4">
        Add your new community to our listing
      </p>
      <CommunityForm :model="newCommunity" />
      <div>{{ formErrors }} </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CommunityForm from '../components/CommunityForm.vue'

export default {
  name: 'Communities',
  components: {
    CommunityForm,
  },
  data() {
    return {
      newCommunity: {},
      formErrors: '',
    }
  },
  computed: {
    ...mapState('communities', ['communities']),
  },
  mounted() {
    this.getCommunities()
  },
  methods: {
    ...mapActions('communities', ['getCommunities', 'postCommunity']),
    createCommunity() {
      this.postCommunity(this.newCommunity)
        .then(() => {
          this.formErrors = {}
          this.newCommunity = {}
        })
        .catch((response) => {
          this.formErrors = response
        })
    },
  },
}
</script>

<style scoped lang="scss">

</style>
