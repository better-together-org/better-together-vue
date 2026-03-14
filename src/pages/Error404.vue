<template>
  <section id="error-404">
    <div class="row heading mb-3">
      <div class="col-md">
        <h2 class="mb-4">
          {{ t('btv.pages.not_found.heading') }}
        </h2>
        <p>{{ t('btv.pages.not_found.body') }}</p>
        <div class="text-center mt-4">
          <RouterLink
            to="/"
            :title="t('btv.pages.not_found.landing_title')"
            class="btn btn-primary card-action"
          >
            {{ t('btv.pages.not_found.visit_landing') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<style lang="scss">
</style>
