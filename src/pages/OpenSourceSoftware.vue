<template>
  <section id="open-source-software">
    <div class="row heading mb-3">
      <div class="col-md">
        <h2>{{ t('btv.pages.open_source_software.heading') }}</h2>
        <p>{{ t('btv.pages.open_source_software.intro_p1') }}</p>
        <p>{{ t('btv.pages.open_source_software.intro_p2') }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-header">
                <h5>
                  <RouterLink
                    to="/projects/community-engine"
                    :title="t('btv.pages.open_source_software.community_engine.name')"
                    class="card-title"
                  >
                    {{ t('btv.pages.open_source_software.community_engine.name') }}
                  </RouterLink>
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  {{ t('btv.pages.open_source_software.community_engine.description') }}
                </p>
              </div>
              <div class="cta card-footer text-center">
                <RouterLink
                  to="/projects/community-engine"
                  :title="t('btv.pages.open_source_software.community_engine.name')"
                  class="btn btn-primary card-action"
                >
                  {{ t('bt.actions.learn_more') }}
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-header">
                <h5>
                  <a
                    class="card-title"
                    href="https://citsci.geog.mcgill.ca/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
                    target="draw"
                    :title="t('btv.pages.open_source_software.draw.name')"
                  >
                    {{ t('btv.pages.open_source_software.draw.name') }}
                  </a>
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  {{ t('btv.pages.open_source_software.draw.description') }}
                </p>
              </div>
              <div class="cta card-footer text-center">
                <a
                  href="https://citsci.geog.mcgill.ca/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
                  target="draw"
                  :title="t('btv.pages.open_source_software.draw.name')"
                  class="btn btn-primary card-action"
                >{{ t('bt.actions.learn_more') }}</a>
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

<style lang="scss">
</style>
