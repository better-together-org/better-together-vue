<template>
  <section id="partners">
    <div class="row heading">
      <div class="col-md">
        <h2>{{ t('btv.pages.partners.heading') }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <p>{{ t('btv.pages.partners.intro_p1') }}</p>
        <p>
          {{ t('btv.pages.partners.intro_p2') }}
          <a href="mailto: info@bettertogethersolutions.com">{{ t('btv.pages.partners.get_in_touch') }}</a>.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div class="row g-4">
          <div class="col-md-3">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>{{ t('btv.pages.partners.colibri_software') }}</h5>
              </div>
              <div class="card-footer h-100">
                <a
                  href="https://www.colibri-software.com/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
                  target="draw"
                  :title="t('btv.pages.partners.colibri_software')"
                >
                  <img
                    src="/assets/images/partners/colibri-software-logo-and-text-large.png"
                    :alt="t('btv.pages.partners.colibri_software')"
                    class="card-img-top"
                  >
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>{{ t('btv.pages.partners.collective_interchange') }}</h5>
              </div>
              <div class="card-footer h-100">
                <a
                  href="https://collectiveinterchange.com"
                  target="collectiveinterchange"
                  :title="t('btv.pages.partners.collective_interchange')"
                >
                  <img
                    src="/assets/images/partners/collective-interchange-logo.png"
                    :alt="t('btv.pages.partners.collective_interchange')"
                    class="card-img-top"
                  >
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>{{ t('btv.pages.partners.draw') }}</h5>
              </div>
              <div class="card-footer h-100">
                <a
                  href="https://citsci.geog.mcgill.ca/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
                  target="draw"
                  :title="t('btv.pages.partners.draw_full')"
                >
                  <img
                    src="/assets/images/partners/DRAW.png"
                    :alt="t('btv.pages.partners.draw_full')"
                    class="card-img-top"
                  >
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>{{ t('btv.pages.partners.laughing_heart') }}</h5>
              </div>
              <div class="card-footer h-100">
                <a
                  href="https://laughingheartmusic.com/"
                  target="laughingheartmusic"
                  :title="t('btv.pages.partners.laughing_heart')"
                >
                  <img
                    src="/assets/images/partners/laughing-heart-music-logo.png"
                    :alt="t('btv.pages.partners.laughing_heart')"
                    class="card-img-top"
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped lang="scss">
</style>
