<template>
  <section id="opportunities">
    <div class="row heading mb-3">
      <div class="col-md">
        <h2>Opportunities</h2>
        <p>
          Your hub for community opportunities. To submit your
          opportunities to our community listing, please

          <b-link href="/contact">
            contact us.
          </b-link>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <b-card-group columns>
          <OpportunityCard
            v-for="opportunity in opportunities"
            :key="opportunity.id"
            v-bind="opportunity"
          />
        </b-card-group>
      </div>
    </div>
  </section>
</template>

<script>
import OpportunityCard from '../components/OpportunityCard.vue'
import OpportunityImgDRAW from '../assets/opportunities/DRAW-promo.jpg'
import OpportunityImgSoftware from '../assets/opportunities/halgatewood-com-tZc3vjPCk-Q-unsplash.jpg'
import OpportunityImgFilmMaking from '../assets/opportunities/rene-ranisch-o5ULV1tP1B4-unsplash.jpg'
import OpportunityImgPhotography from '../assets/opportunities/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg'
import OpportunityImgOnlineSecurity from '../assets/opportunities/dan-nelson-EhbuqJYNCRk-unsplash.jpg'
import OpportunityImgMarketing from '../assets/opportunities/campaign-creators-yktK2qaiVHI-unsplash.jpg'
import OpportunityImgECommerce from '../assets/opportunities/mike-petrucci-c9FQyqIECds-unsplash.jpg'

export default {
  name: 'Opportunities',
  components: {
    OpportunityCard,
  },
  data() {
    return {
      opportunities: [
        {
          id: 1,
          community: 'Better Together',
          name: 'Software Development',
          description: 'Learn how to build websites and web aplications or hire a software developer.',
          url: '/contact',
          imageUrl: OpportunityImgSoftware,
          attribution: '<span>Photo by <a href="https://unsplash.com/@halacious?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">HalGatewood.com</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
          publishedAt: 'February 8th, 2021',
          tags: ['Mentorship', 'Service'],
          location: 'Online or in Person<br />(Labrador Straits)',
        },
        {
          id: 5,
          community: 'Better Together',
          name: 'Online Security',
          description: 'Learn how to stay safe online and avoid scams and identity theft.',
          url: '/contact',
          imageUrl: OpportunityImgOnlineSecurity,
          attribution: '<span>Photo by <a href="https://unsplash.com/@danny144?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dan Nelson</a> on <a href="https://unsplash.com/s/photos/online-security?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
          publishedAt: 'February 8th, 2021',
          tags: ['Mentorship'],

          location: 'Online or in Person<br />(Labrador Straits)',
        },
        {
          id: 7,
          community: 'DRAW: Data Rescue Archives and Weather',
          name: 'Historical Weather and Archives',
          description: 'Learn about weather in the 1800s through a crowdsourced effort to transcribe historical weather logs from McGill University\'s archives.',
          url: 'https://citsci.geog.mcgill.ca/?referrer=bettertogether',
          imageUrl: OpportunityImgDRAW,
          publishedAt: 'February 9th, 2021',
          tags: ['Volunteering', 'Project', 'Education'],
          location: 'Online',
        },
        {
          id: 2,
          community: 'Better Together',
          name: 'Photography',
          description: 'Learn how to become a better photographer or hire a photographer.',
          url: '/contact',
          imageUrl: OpportunityImgPhotography,
          attribution: '<span>Photo by <a href="https://unsplash.com/@shbabalif?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alif Ngoylung</a> on <a href="https://unsplash.com/s/photos/photography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
          publishedAt: 'February 8th, 2021',
          tags: ['Mentorship', 'Service'],
          location: 'Online or in Person<br />(Labrador Straits)',
        },
        {
          id: 3,
          community: 'Better Together',
          name: 'Film Making',
          description: 'Learn how to create films or hire a film maker.',
          url: '/contact',
          imageUrl: OpportunityImgFilmMaking,
          attribution: '<span>Photo by <a href="https://unsplash.com/@frame_media?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">René Ranisch</a> on <a href="https://unsplash.com/s/photos/film-making?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
          publishedAt: 'February 8th, 2021',
          tags: ['Mentorship', 'Service'],
          location: 'Online or in Person<br />(Labrador Straits)',
        },
        {
          id: 6,
          community: 'Better Together',
          name: 'E-Commerce',
          description: 'Launch your very own web store and sell your products and services online.',
          url: 'https://marketplace.bebettertogether.ca/launch-your-marketplace',
          urlTarget: 'marketplace',
          imageUrl: OpportunityImgECommerce,
          attribution: '<span>Photo by <a href="https://unsplash.com/@mikepetrucci?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mike Petrucci</a> on <a href="https://unsplash.com/s/photos/e-commerce?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
          publishedAt: 'February 8th, 2021',
          tags: ['Service'],

          location: 'Online or in Person<br />(Labrador Straits)',
        },
        {
          id: 4,
          community: 'Better Together',
          name: 'Marketing',
          description: 'Learn how to connect with customers or hire a marketer.',
          url: '/contact',
          imageUrl: OpportunityImgMarketing,
          attribution: '<span>Photo by <a href="https://unsplash.com/@campaign_creators?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Campaign Creators</a> on <a href="https://unsplash.com/s/photos/marketing?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>',
          publishedAt: 'February 8th, 2021',
          tags: ['Mentorship', 'Service'],
          location: 'Online or in Person<br />(Labrador Straits)',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
</style>
