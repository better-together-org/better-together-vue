<template>
  <section>
    <div class="row heading">
      <div class="col-md">
        <h2>{{ t('btv.featured_projects.heading') }}</h2>
      </div>
    </div>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card text-center h-100">
          <div class="card-header">
            <h5>{{ t('btv.featured_projects.newcomer_navigator.name') }}</h5>
          </div>
          <div class="card-body text-center">
            <a
              href="https://newcomernavigatornl.ca?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=logo"
              target="newcomernavigatornl"
              :title="t('btv.featured_projects.newcomer_navigator.name')"
            >
              <img
                src="/assets/images/projects/newcomer-navigator-logo.png"
                :alt="t('btv.featured_projects.newcomer_navigator.name')"
                class="project-logo"
              >
            </a>
            <p class="card-text mt-3">
              {{ t('btv.featured_projects.newcomer_navigator.description') }}
            </p>
          </div>
          <div class="cta card-footer text-center">
            <a
              href="https://newcomernavigatornl.ca?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=button"
              target="newcomernavigatornl"
              class="btn btn-primary card-action"
            >{{ t('bt.actions.learn_more') }}</a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card text-center h-100">
          <div class="card-header">
            <h5>{{ t('btv.featured_projects.nl_venues.name') }}</h5>
          </div>
          <div class="card-body text-center">
            <a
              href="https://nlvenues.com?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=logo"
              target="nlvenues"
              :title="t('btv.featured_projects.nl_venues.name')"
            >
              <img
                src="/assets/images/projects/nl-venues-logo.png"
                :alt="t('btv.featured_projects.nl_venues.name')"
                class="project-logo"
              >
            </a>
            <p class="card-text mt-3">
              {{ t('btv.featured_projects.nl_venues.description') }}
            </p>
          </div>
          <div class="cta card-footer text-center">
            <a
              href="https://nlvenues.com?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=button"
              target="nlvenues"
              class="btn btn-primary card-action"
            >{{ t('bt.actions.learn_more') }}</a>
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
.project-logo {
  max-height: 150px;
  width: auto;
  display: block;
  margin: 0 auto;
  object-fit: contain;
}
</style>
