<template>
  <div
    id="projects"
  >
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>Projects</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>
            Better Together aims to bring people together to build great
            things!
            These are some of the projects that Better Together and our
            partners have been working on.
          </p>
        </div>
      </div>
    </section>

    <TechForGood />
    <CommunityCommerce />
  </div>
</template>

<script>
// @ is an alias to /src
import CommunityCommerce from './ProjectsCommunityCommerce.vue'
import TechForGood from './TechForGood.vue'

export default {
  name: 'Projects',
  components: {
    CommunityCommerce,
    TechForGood,
  },
}
</script>

<style lang="scss">
</style>
