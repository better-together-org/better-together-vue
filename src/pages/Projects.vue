<template>
  <div id="projects">
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>{{ t('btv.pages.projects.heading') }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>{{ t('btv.pages.projects.intro') }}</p>
        </div>
      </div>
    </section>

    <FeaturedProjects />
    <TechForGood />
    <CommunityCommerce />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import CommunityCommerce from './ProjectsCommunityCommerce.vue'
import TechForGood from './TechForGood.vue'
import FeaturedProjects from '../components/FeaturedProjects.vue'

const { t } = useI18n()
</script>

<style lang="scss">
</style>
