<template>
  <b-card
    :img-src="imageUrl"
    :img-alt="name"
    img-top
    footer-class="cta text-center"
  >
    <template #header>
      <h4 class="card-title">
        <b-link
          v-if="url"
          :href="url"
          :title="name"
          :target="urlTarget"
        >
          {{ name }}
        </b-link>
        <span v-else>{{ name }}</span>
      </h4>
      <b-card-sub-title class="mb-2">
        <span title="Community">{{ community }}</span>,<br>
        <span title="Publication Date">{{ publishedAt }}</span>
      </b-card-sub-title>
      <div class="text-center">
        <b-badge
          v-for="tag in tags"
          :key="tag"
          pill
          variant="secondary"
          :title="tag"
        >
          {{ tag }}
        </b-badge>
      </div>
      <b-card-sub-title
        class="my-2"
      >
        <span
          title="Location"
          v-html="location"
        />
      </b-card-sub-title>
    </template>
    <b-card-text>
      {{ description }}
    </b-card-text>
    <b-card-text
      v-if="attribution"
      class="text-muted"
      text-tag="small"
      v-html="attribution"
    />

    <template
      #footer
    >
      <b-button
        v-if="url"
        class="card-action"
        :href="url"
        variant="primary"
        title="Learn more"
        :target="urlTarget"
      >
        Learn more
      </b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  name: 'Opportunity',
  props: {
    id: {
      type: Number,
      required: true,
    },
    community: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: false,
      default: () => '',
    },
    urlTarget: {
      type: String,
      required: false,
      default: () => '',
    },
    imageUrl: {
      type: String,
      required: false,
      default: () => '',
    },
    attribution: {
      type: String,
      required: false,
      default: () => '',
    },
    publishedAt: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
  .card {
    &:hover {
      background-color: #F5F5F5;
    }

    .badge + .badge {
      margin-left: 2px;
    }
  }
</style>
