<template>
  <section id="objectives">
    <div class="row">
      <div class="col">
        <h2>{{ t('btv.pages.goals.heading') }}</h2>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>
                  <RouterLink
                    to="#"
                    :title="t('btv.pages.goals.community.name')"
                  >
                    {{ t('btv.pages.goals.community.name') }}
                  </RouterLink>
                </h5>
              </div>
              <div class="card-body">
                <p>{{ t('btv.pages.goals.community.body') }}</p>
              </div>
              <div class="card-footer">
                <RouterLink
                  to="#"
                  :title="t('btv.pages.goals.community.name')"
                  class="btn btn-primary card-action"
                >
                  {{ t('bt.actions.learn_more') }}
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>
                  <RouterLink
                    to="#"
                    :title="t('btv.pages.goals.clean_energy.name')"
                  >
                    {{ t('btv.pages.goals.clean_energy.name') }}
                  </RouterLink>
                </h5>
              </div>
              <div class="card-body">
                <p>{{ t('btv.pages.goals.clean_energy.body') }}</p>
              </div>
              <div class="card-footer">
                <RouterLink
                  to="#"
                  :title="t('btv.pages.goals.clean_energy.name')"
                  class="btn btn-primary card-action"
                >
                  {{ t('bt.actions.learn_more') }}
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>
                  <RouterLink
                    to="#"
                    :title="t('btv.pages.goals.social_justice.name')"
                  >
                    {{ t('btv.pages.goals.social_justice.name') }}
                  </RouterLink>
                </h5>
              </div>
              <div class="card-body">
                <p>{{ t('btv.pages.goals.social_justice.body') }}</p>
              </div>
              <div class="card-footer">
                <RouterLink
                  to="#"
                  :title="t('btv.pages.goals.social_justice.name')"
                  class="btn btn-primary card-action"
                >
                  {{ t('bt.actions.learn_more') }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-4 mt-2">
          <div class="col-md-4">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>
                  <RouterLink
                    to="#"
                    :title="t('btv.pages.goals.sustainability.name')"
                  >
                    {{ t('btv.pages.goals.sustainability.name') }}
                  </RouterLink>
                </h5>
              </div>
              <div class="card-body">
                <p>{{ t('btv.pages.goals.sustainability.body') }}</p>
              </div>
              <div class="card-footer">
                <RouterLink
                  to="#"
                  :title="t('btv.pages.goals.sustainability.name')"
                  class="btn btn-primary card-action"
                >
                  {{ t('bt.actions.learn_more') }}
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>
                  <RouterLink
                    to="#"
                    :title="t('btv.pages.goals.climate_change.name')"
                  >
                    {{ t('btv.pages.goals.climate_change.name') }}
                  </RouterLink>
                </h5>
              </div>
              <div class="card-body">
                <p>{{ t('btv.pages.goals.climate_change.body') }}</p>
              </div>
              <div class="card-footer">
                <RouterLink
                  to="#"
                  :title="t('btv.pages.goals.climate_change.name')"
                  class="btn btn-primary card-action"
                >
                  {{ t('bt.actions.learn_more') }}
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-center h-100">
              <div class="card-header">
                <h5>
                  <RouterLink
                    to="#"
                    :title="t('btv.pages.goals.cooperatives.name')"
                  >
                    {{ t('btv.pages.goals.cooperatives.name') }}
                  </RouterLink>
                </h5>
              </div>
              <div class="card-body">
                <p>{{ t('btv.pages.goals.cooperatives.body') }}</p>
              </div>
              <div class="card-footer">
                <RouterLink
                  to="#"
                  :title="t('btv.pages.goals.cooperatives.name')"
                  class="btn btn-primary card-action"
                >
                  {{ t('bt.actions.learn_more') }}
                </RouterLink>
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
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<style scoped lang="scss">
</style>
