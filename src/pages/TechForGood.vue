<template>
  <div id="tech-for-good">
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>{{ t('btv.pages.tech_for_good.heading') }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>{{ t('btv.pages.tech_for_good.p1') }}</p>
          <p>{{ t('btv.pages.tech_for_good.p2') }}</p>
          <p>{{ t('btv.pages.tech_for_good.p3') }}</p>
          <p>{{ t('btv.pages.tech_for_good.p4') }}</p>
          <p>{{ t('btv.pages.tech_for_good.p5') }}</p>
          <p>{{ t('btv.pages.tech_for_good.p6') }}</p>
          <p>{{ t('btv.pages.tech_for_good.p7') }}</p>
          <div class="text-center">
            <a
              href="/contact?utm_source=better-together&utm_medium=better-together&utm_campaign=tech-for-good"
              class="btn btn-primary card-action"
            >{{ t('bt.actions.learn_more') }}</a>
          </div>
        </div>
      </div>
    </section>

    <OpenSourceSoftware />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import OpenSourceSoftware from './OpenSourceSoftware.vue'

const { t } = useI18n()
</script>

<style lang="scss">
</style>
