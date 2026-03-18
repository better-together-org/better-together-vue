<template>
  <section id="membership">
    <div class="row heading">
      <div class="col-md">
        <h2>{{ t('btv.pages.membership.heading') }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <p>{{ t('btv.pages.membership.body') }}</p>
        <p class="text-muted">
          {{ t('btv.pages.membership.coop_trajectory') }}
        </p>
        <h5 class="text-start">
          {{ t('btv.pages.membership.types_heading') }}
        </h5>
        <ul>
          <li>{{ t('btv.pages.membership.types.individual') }}</li>
          <li>{{ t('btv.pages.membership.types.organization') }}</li>
        </ul>
        <h5 class="text-start">
          {{ t('btv.pages.membership.skills_heading') }}
        </h5>
        <p>{{ t('btv.pages.membership.skills_intro') }}</p>
        <ul>
          <li>{{ t('btv.pages.membership.skills.software_developers') }}</li>
          <li>{{ t('btv.pages.membership.skills.strategists') }}</li>
          <li>{{ t('btv.pages.membership.skills.fund_raisers') }}</li>
          <li>{{ t('btv.pages.membership.skills.project_managers') }}</li>
          <li>{{ t('btv.pages.membership.skills.communications_specialists') }}</li>
          <li>{{ t('btv.pages.membership.skills.and_more') }}</li>
        </ul>
      </div>
    </div>
    <div class="cta">
      <RouterLink
        to="/contact"
        :title="t('btv.pages.membership.cta')"
        class="btn btn-primary"
      >
        {{ t('btv.pages.membership.cta') }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>
