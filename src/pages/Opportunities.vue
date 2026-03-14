<template>
  <section id="opportunities">
    <div class="row heading mb-3">
      <div class="col-md">
        <h2>{{ t('btv.pages.opportunities.heading') }}</h2>
        <p>
          {{ t('btv.pages.opportunities.intro') }}
          <a href="/contact">{{ t('btv.pages.opportunities.contact_us') }}</a>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div class="row g-4">
          <div
            v-for="opportunity in opportunities"
            :key="opportunity.id"
            class="col-md-4"
          >
            <OpportunityCard v-bind="opportunity" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import OpportunityCard from '../components/OpportunityCard.vue'
import OpportunityImgDRAW from '../assets/opportunities/DRAW-promo.jpg'
import OpportunityImgSoftware from '../assets/opportunities/halgatewood-com-tZc3vjPCk-Q-unsplash.jpg'
import OpportunityImgFilmMaking from '../assets/opportunities/rene-ranisch-o5ULV1tP1B4-unsplash.jpg'
import OpportunityImgPhotography from '../assets/opportunities/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg'
import OpportunityImgOnlineSecurity from '../assets/opportunities/dan-nelson-EhbuqJYNCRk-unsplash.jpg'
import OpportunityImgMarketing from '../assets/opportunities/campaign-creators-yktK2qaiVHI-unsplash.jpg'
import OpportunityImgECommerce from '../assets/opportunities/mike-petrucci-c9FQyqIECds-unsplash.jpg'

const { t } = useI18n()

const opportunities = computed(() => [
  {
    id: 1,
    community: t('btv.pages.opportunities.software_dev.community'),
    name: t('btv.pages.opportunities.software_dev.name'),
    description: t('btv.pages.opportunities.software_dev.description'),
    url: '/contact',
    imageUrl: OpportunityImgSoftware,
    attribution: '<span>Photo by <a href="https://unsplash.com/@halacious?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">HalGatewood.com</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
    publishedAt: 'February 27th, 2024',
    tags: ['Mentorship', 'Service'],
    location: 'Online or in Person<br />(Corner Brook, NL)',
  },
  {
    id: 5,
    community: t('btv.pages.opportunities.online_security.community'),
    name: t('btv.pages.opportunities.online_security.name'),
    description: t('btv.pages.opportunities.online_security.description'),
    url: '/contact',
    imageUrl: OpportunityImgOnlineSecurity,
    attribution: '<span>Photo by <a href="https://unsplash.com/@danny144?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dan Nelson</a> on <a href="https://unsplash.com/s/photos/online-security?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
    publishedAt: 'February 27th, 2024',
    tags: ['Mentorship'],
    location: 'Online or in Person<br />(Corner Brook, NL)',
  },
  {
    id: 7,
    community: t('btv.pages.opportunities.historical_weather.community'),
    name: t('btv.pages.opportunities.historical_weather.name'),
    description: t('btv.pages.opportunities.historical_weather.description'),
    url: 'https://citsci.geog.mcgill.ca/?referrer=bettertogether',
    imageUrl: OpportunityImgDRAW,
    publishedAt: 'February 27th, 2024',
    tags: ['Volunteering', 'Project', 'Education'],
    location: 'Online',
  },
  {
    id: 2,
    community: t('btv.pages.opportunities.photography.community'),
    name: t('btv.pages.opportunities.photography.name'),
    description: t('btv.pages.opportunities.photography.description'),
    url: '/contact',
    imageUrl: OpportunityImgPhotography,
    attribution: '<span>Photo by <a href="https://unsplash.com/@shbabalif?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alif Ngoylung</a> on <a href="https://unsplash.com/s/photos/photography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
    publishedAt: 'February 27th, 2024',
    tags: ['Mentorship', 'Service'],
    location: 'Online or in Person<br />(Corner Brook, NL)',
  },
  {
    id: 3,
    community: t('btv.pages.opportunities.film_making.community'),
    name: t('btv.pages.opportunities.film_making.name'),
    description: t('btv.pages.opportunities.film_making.description'),
    url: '/contact',
    imageUrl: OpportunityImgFilmMaking,
    attribution: '<span>Photo by <a href="https://unsplash.com/@frame_media?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">René Ranisch</a> on <a href="https://unsplash.com/s/photos/film-making?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
    publishedAt: 'February 27th, 2024',
    tags: ['Mentorship', 'Service'],
    location: 'Online or in Person<br />(Corner Brook, NL)',
  },
  {
    id: 6,
    community: t('btv.pages.opportunities.ecommerce.community'),
    name: t('btv.pages.opportunities.ecommerce.name'),
    description: t('btv.pages.opportunities.ecommerce.description'),
    url: 'https://marketplace.bebettertogether.ca/launch-your-marketplace',
    urlTarget: 'marketplace',
    imageUrl: OpportunityImgECommerce,
    attribution: '<span>Photo by <a href="https://unsplash.com/@mikepetrucci?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mike Petrucci</a> on <a href="https://unsplash.com/s/photos/e-commerce?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
    publishedAt: 'February 27th, 2024',
    tags: ['Service'],
    location: 'Online or in Person<br />(Corner Brook, NL)',
  },
  {
    id: 4,
    community: t('btv.pages.opportunities.marketing.community'),
    name: t('btv.pages.opportunities.marketing.name'),
    description: t('btv.pages.opportunities.marketing.description'),
    url: '/contact',
    imageUrl: OpportunityImgMarketing,
    attribution: '<span>Photo by <a href="https://unsplash.com/@campaign_creators?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Campaign Creators</a> on <a href="https://unsplash.com/s/photos/marketing?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
    publishedAt: 'February 27th, 2024',
    tags: ['Mentorship', 'Service'],
    location: 'Online or in Person<br />(Corner Brook, NL)',
  },
])
</script>

<style lang="scss">
</style>
