<template>
  <section id="community-platforms">
    <div class="row heading mb-3">
      <div class="col-md">
        <h2>{{ t('btv.pages.community_platforms.heading') }}</h2>
        <p>{{ t('btv.pages.community_platforms.intro_p1') }}</p>
        <p>{{ t('btv.pages.community_platforms.intro_p2') }}</p>
        <p>{{ t('btv.pages.community_platforms.intro_p3') }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-header">
                <h5>
                  <a
                    href="#"
                    :title="t('btv.pages.community_platforms.hub.title_full')"
                    target="bt-community-hub"
                    class="card-title"
                  >{{ t('btv.pages.community_platforms.hub.title') }}</a>
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  {{ t('btv.pages.community_platforms.hub.description') }}
                </p>
              </div>
              <div class="cta card-footer text-center">
                <a
                  href="#"
                  :title="t('btv.pages.community_platforms.hub.title_full')"
                  class="btn btn-primary card-action"
                >{{ t('bt.actions.learn_more') }}</a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-header">
                <h5>
                  <a
                    class="card-title"
                    href="#"
                    :title="t('btv.pages.community_platforms.cloud.title_full')"
                    target="bt-community-cloud"
                  >{{ t('btv.pages.community_platforms.cloud.title') }}</a>
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  {{ t('btv.pages.community_platforms.cloud.description') }}
                </p>
              </div>
              <div class="cta card-footer text-center">
                <a
                  href="#"
                  :title="t('btv.pages.community_platforms.cloud.title_full')"
                  target="bt-community-cloud"
                  class="btn btn-primary card-action"
                >{{ t('bt.actions.learn_more') }}</a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-header">
                <h5>
                  <a
                    class="card-title"
                    href="#"
                    :title="t('btv.pages.community_platforms.marketplace.title_full')"
                    target="bt-community-marketplace"
                  >{{ t('btv.pages.community_platforms.marketplace.title') }}</a>
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  {{ t('btv.pages.community_platforms.marketplace.description') }}
                </p>
              </div>
              <div class="cta card-footer text-center">
                <a
                  href="#"
                  :title="t('btv.pages.community_platforms.marketplace.title_full')"
                  target="bt-community-marketplace"
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

const { t } = useI18n()
</script>

<style lang="scss">
</style>
