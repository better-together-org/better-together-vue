<template>
  <div id="camp-better-together">
    <section id="camp-better-together-section">
      <div class="row heading">
        <div class="col-md">
          <h2>{{ t('btv.pages.camp_better_together.heading') }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p class="card-text">
            {{ t('btv.pages.camp_better_together.description') }}
          </p>
          <div class="cta text-center">
            <RouterLink
              to="/contact"
              class="btn btn-primary card-action"
            >
              {{ t('bt.actions.learn_more') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<style lang="scss">
</style>
