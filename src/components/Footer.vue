<template>
  <footer id="footer">
    <div class="footer-inner container py-4">
      <div class="row gy-4">
        <!-- Brand + tagline + copyright -->
        <div class="col-12 col-md-4 d-flex flex-column align-items-start gap-2">
          <BrandingLogo />
          <p class="footer-tagline mb-0">
            {{ t('btv.footer.tagline') }}
          </p>
          <p class="footer-copyright mb-0">
            {{ t('btv.footer.copyright', { year: currentYear }) }}
          </p>
        </div>

        <!-- Site nav -->
        <nav
          class="col-6 col-md-4"
          :aria-label="t('btv.footer.nav_heading')"
        >
          <h6 class="footer-heading">
            {{ t('btv.footer.nav_heading') }}
          </h6>
          <ul class="list-unstyled mb-0">
            <li
              v-for="item in navItems"
              :key="item.path"
            >
              <RouterLink :to="item.path">
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- Connect -->
        <div class="col-6 col-md-4">
          <h6 class="footer-heading">
            {{ t('btv.footer.contact_heading') }}
          </h6>
          <ul class="list-unstyled mb-3">
            <li>
              <a href="mailto:info@bettertogethersolutions.com">
                {{ t('btv.footer.email_label') }}
              </a>
            </li>
          </ul>

          <h6 class="footer-heading">
            {{ t('btv.footer.social_heading') }}
          </h6>
          <div class="d-flex gap-3 flex-wrap">
            <a
              v-for="link in socialLinks"
              :key="link.platform"
              :href="link.url"
              :aria-label="link.platform"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
            >
              <i
                v-if="link.icon"
                :class="['bi', link.icon]"
                aria-hidden="true"
              />
              <span v-else>{{ link.platform }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Ecosystem strip -->
      <div class="row mt-4 pt-3 border-top border-secondary">
        <div class="col-12 col-md-6">
          <h6 class="footer-heading">
            {{ t('btv.footer.ecosystem_heading') }}
          </h6>
          <p class="footer-tagline mb-2">
            {{ t('btv.footer.ecosystem_body') }}
          </p>
          <a
            href="https://communityengine.app"
            target="_blank"
            rel="noopener noreferrer"
            class="d-inline-block mb-0"
          >{{ t('btv.footer.ecosystem_ce_label') }} ↗</a>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <h6 class="footer-heading">
            {{ t('btv.footer.ecosystem_implementations_heading') }}
          </h6>
          <ul class="list-unstyled mb-0">
            <li>
              <a href="https://newcomernavigatornl.ca" target="_blank" rel="noopener noreferrer">
                Newcomer Navigator NL ↗
              </a>
            </li>
            <li>
              <a href="https://nlvenues.com" target="_blank" rel="noopener noreferrer">
                NL Venues ↗
              </a>
            </li>
            <li>
              <a href="https://newfoundlandlabrador.online" target="_blank" rel="noopener noreferrer">
                Newfoundland &amp; Labrador Online ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BrandingLogo from './BrandingLogo.vue'
import { useSocialLinks } from '../composables/useSocialLinks'

const { t } = useI18n()
const currentYear = computed(() => new Date().getFullYear())

const navItems = computed(() => [
  { path: '/about', label: t('btv.nav.about') },
  { path: '/projects', label: t('btv.nav.projects') },
  { path: '/partners', label: t('btv.nav.partners') },
  { path: '/opportunities', label: t('btv.nav.opportunities') },
  { path: '/contact', label: t('btv.nav.contact') },
])

const apiUrl = import.meta.env.VITE_BETTER_TOGETHER_API_URI || null
const { links: socialLinks } = useSocialLinks(apiUrl)
</script>

<style scoped lang="scss">
#footer {
  background-color: var(--bs-dark, #212529);
  color: var(--bs-light, #f8f9fa);
  margin-top: auto;
}

.footer-inner {
  max-width: 1200px;
}

.footer-tagline {
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-copyright {
  font-size: 0.8rem;
  opacity: 0.6;
}

.footer-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.6;
  margin-bottom: 0.75rem;
}

a,
.footer-social-link {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
}

.footer-social-link {
  font-size: 1.25rem;

  &:hover {
    text-decoration: none;
  }
}

li + li {
  margin-top: 0.35rem;
}
</style>
