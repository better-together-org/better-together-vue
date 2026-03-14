<template>
  <div id="projects">
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

    <FeaturedProjects />
    <TechForGood />
    <CommunityCommerce />
  </div>
</template>

<script setup>
import CommunityCommerce from './ProjectsCommunityCommerce.vue'
import TechForGood from './TechForGood.vue'
import FeaturedProjects from '../components/FeaturedProjects.vue'
</script>

<style lang="scss">
</style>
