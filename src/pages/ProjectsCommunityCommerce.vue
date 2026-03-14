<template>
  <section id="better-together-community-commerce">
    <div class="row heading">
      <div class="col-md">
        <h2>{{ t('btv.pages.community_commerce.heading') }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <p>{{ t('btv.pages.community_commerce.p1') }}</p>
        <p>{{ t('btv.pages.community_commerce.p2') }}</p>
        <p>{{ t('btv.pages.community_commerce.p3') }}</p>
        <p>{{ t('btv.pages.community_commerce.p4') }}</p>
        <div class="text-center">
          <a
            href="/contact?utm_source=better-together&utm_medium=better-together&utm_campaign=community-commerce"
            target="community-commerce"
            :title="t('btv.pages.community_commerce.heading')"
            class="btn btn-primary card-action"
          >{{ t('bt.actions.learn_more') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss">
</style>
