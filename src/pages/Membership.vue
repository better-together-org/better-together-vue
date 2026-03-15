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
    <div class="row mt-4">
      <div class="col-md-8">
        <!-- TODO: replace local import with @bettertogether/community-engine-vue once
             BtMembershipRequestForm is published in CEV >= 0.3.0 -->
        <BtMembershipRequestForm :community-id="hostCommunityId" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BtMembershipRequestForm from '@/components/membership_request/BtMembershipRequestForm.vue'

const { t } = useI18n()

const hostCommunityId = computed(
  () => import.meta.env.VITE_BT_HOST_COMMUNITY_ID || null
)
</script>
