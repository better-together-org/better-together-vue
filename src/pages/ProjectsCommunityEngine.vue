<template>
  <div
    id="project-community-engine"
    class="container"
  >
    <section id="introduction">
      <div class="row">
        <div class="col-md">
          <h2>{{ t('btv.pages.community_engine.heading') }}</h2>
          <p>{{ t('btv.pages.community_engine.intro_p1') }}</p>
          <p>{{ t('btv.pages.community_engine.intro_p2') }}</p>
          <p>{{ t('btv.pages.community_engine.intro_p3') }}</p>
        </div>
      </div>
    </section>

    <section id="features">
      <div class="row">
        <div class="col-md">
          <h3>{{ t('btv.pages.community_engine.features.heading') }}</h3>
          <ul>
            <li>{{ t('btv.pages.community_engine.features.seamless_integration') }}</li>
            <li>{{ t('btv.pages.community_engine.features.community_creation') }}</li>
            <li>{{ t('btv.pages.community_engine.features.live_chat') }}</li>
            <li>{{ t('btv.pages.community_engine.features.extensible') }}</li>
            <li>{{ t('btv.pages.community_engine.features.role_based') }}</li>
            <li>{{ t('btv.pages.community_engine.features.responsive') }}</li>
            <li>{{ t('btv.pages.community_engine.features.turbo') }}</li>
            <li>{{ t('btv.pages.community_engine.features.localization') }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="purpose-vision">
      <div class="row">
        <div class="col-md">
          <h3>{{ t('btv.pages.community_engine.purpose.heading') }}</h3>
          <p>{{ t('btv.pages.community_engine.purpose.p1') }}</p>
          <p>{{ t('btv.pages.community_engine.purpose.p2') }}</p>
        </div>
      </div>
    </section>

    <section id="ruby-on-rails">
      <div class="row">
        <div class="col-md">
          <h3>
            <a
              href="https://github.com/better-together-org/community-engine-rails"
              target="bt-community-engine-rails"
              :title="t('btv.pages.community_engine.rails.title')"
            >
              {{ t('btv.pages.community_engine.rails.heading') }}
            </a>
          </h3>
          <p>{{ t('btv.pages.community_engine.rails.description') }}</p>
        </div>
      </div>
    </section>

    <FeaturedProjects />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import FeaturedProjects from '../components/FeaturedProjects.vue'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
#project-community-engine {
  padding: 2rem 0;

  h2,
  h3 {
    color: #2c3e50;
  }

  p {
    color: #34495e;
    font-size: 1rem;
    line-height: 1.5;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
