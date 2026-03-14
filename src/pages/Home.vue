<template>
  <div id="home">
    <section id="introduction">
      <div class="col">
        <h2>{{ t('btv.pages.home.heading') }}</h2>
        <p>{{ t('btv.pages.home.intro_p1') }}</p>
        <p>{{ t('btv.pages.home.intro_p2') }}</p>
      </div>
    </section>
    <img
      class="bt-banner img-fluid mx-auto d-block"
      :src="BtBannerImg"
      :alt="t('btv.app.title')"
    >
    <ContactNewsletter />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import BtBannerImg from '../assets/betterTogetherBanner.png'
import ContactNewsletter from '../components/ContactNewsletter.vue'

const { t } = useI18n()
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 1.5rem;
}

.bt-banner {
  margin-bottom: 15px;
  border-radius: 10px;
}
</style>
