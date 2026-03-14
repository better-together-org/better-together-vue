<template>
  <BCard
    :img-src="imageUrl"
    :img-alt="name"
    img-top
    footer-class="cta text-center"
  >
    <template #header>
      <h4 class="card-title">
        <BLink
          v-if="url"
          :href="url"
          :title="name"
          :target="urlTarget"
        >
          {{ name }}
        </BLink>
        <span v-else>{{ name }}</span>
      </h4>
      <p class="card-subtitle text-muted mb-2">
        <span :title="community">{{ community }}</span>,<br>
        <span :title="t('btv.opportunity_card.publication_date')">{{ publishedAt }}</span>
      </p>
      <div class="text-center">
        <BBadge
          v-for="tag in tags"
          :key="tag"
          pill
          variant="secondary"
          :title="tag"
        >
          {{ tag }}
        </BBadge>
      </div>
      <p class="card-subtitle text-muted my-2">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span
          :title="t('btv.opportunity_card.location')"
          v-html="location"
        />
      </p>
    </template>

    <p class="card-text">
      {{ description }}
    </p>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p
      v-if="attribution"
      class="card-text text-muted"
    >
      <small v-html="attribution" />
    </p>

    <template #footer>
      <BButton
        v-if="url"
        class="card-action"
        :href="url"
        variant="primary"
        :target="urlTarget"
      >
        {{ t('bt.actions.learn_more') }}
      </BButton>
    </template>
  </BCard>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { BCard, BBadge, BButton, BLink } from 'bootstrap-vue-next'

const { t } = useI18n()

defineProps({
  id: { type: Number, required: true },
  community: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, default: '' },
  urlTarget: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  attribution: { type: String, default: '' },
  publishedAt: { type: String, required: true },
  tags: { type: Array, default: () => [] },
})
</script>

<style scoped lang="scss">
.card {
  &:hover { background-color: #F5F5F5; }
  .badge + .badge { margin-left: 2px; }
}
</style>
