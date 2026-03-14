<template>
  <div id="about">
    <section class="movement-vision">
      <h2>{{ t('btv.pages.about.movement.heading') }}</h2>
      <p>{{ t('btv.pages.about.movement.body') }}</p>
    </section>

    <section class="foundational-principles">
      <h2>{{ t('btv.pages.about.principles.heading') }}</h2>
      <p>{{ t('btv.pages.about.principles.intro') }}</p>
      <div
        v-for="(principle, index) in principles"
        :key="index"
        class="principle"
      >
        <h4 @click="toggleCollapse(index)">
          {{ principle.name }}
        </h4>
        <div
          v-if="!collapsed.includes(index)"
          class="content"
        >
          <p>{{ principle.description }}</p>
        </div>
      </div>
    </section>

    <section class="core-values">
      <h2>{{ t('btv.pages.about.values.heading') }}</h2>
      <p>{{ t('btv.pages.about.values.intro') }}</p>
      <div
        v-for="(value, index) in values"
        :key="`value-${index}`"
        class="value"
      >
        <h4 @click="toggleCollapse(index + principles.length)">
          {{ value.name }}
        </h4>
        <div
          v-if="!collapsed.includes(index + principles.length)"
          class="content"
        >
          <p>{{ value.description }}</p>
        </div>
      </div>
    </section>

    <section class="transformative-pathways">
      <h2>{{ t('btv.pages.about.pathways.heading') }}</h2>
      <p>{{ t('btv.pages.about.pathways.intro') }}</p>
      <div
        v-for="(pathway, index) in pathways"
        :key="`pathway-${index}`"
        class="pathway"
      >
        <h4>{{ pathway.name }}</h4>
        <p>{{ pathway.description }}</p>
      </div>
    </section>

    <section class="call-to-action">
      <h2>{{ t('btv.pages.about.cta.heading') }}</h2>
      <p>{{ t('btv.pages.about.cta.body') }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const collapsed = ref([])

const principles = computed(() => [
  { name: t('btv.pages.about.principles.love.name'), description: t('btv.pages.about.principles.love.description') },
  { name: t('btv.pages.about.principles.inclusivity.name'), description: t('btv.pages.about.principles.inclusivity.description') },
  { name: t('btv.pages.about.principles.care.name'), description: t('btv.pages.about.principles.care.description') },
  { name: t('btv.pages.about.principles.resilience.name'), description: t('btv.pages.about.principles.resilience.description') },
  { name: t('btv.pages.about.principles.hope.name'), description: t('btv.pages.about.principles.hope.description') },
])

const values = computed(() => [
  { name: t('btv.pages.about.values.curiosity.name'), description: t('btv.pages.about.values.curiosity.description') },
  { name: t('btv.pages.about.values.kindness.name'), description: t('btv.pages.about.values.kindness.description') },
  { name: t('btv.pages.about.values.generosity.name'), description: t('btv.pages.about.values.generosity.description') },
  { name: t('btv.pages.about.values.reciprocity.name'), description: t('btv.pages.about.values.reciprocity.description') },
  { name: t('btv.pages.about.values.cooperation.name'), description: t('btv.pages.about.values.cooperation.description') },
  { name: t('btv.pages.about.values.solidarity.name'), description: t('btv.pages.about.values.solidarity.description') },
  { name: t('btv.pages.about.values.accountability.name'), description: t('btv.pages.about.values.accountability.description') },
  { name: t('btv.pages.about.values.stewardship.name'), description: t('btv.pages.about.values.stewardship.description') },
])

const pathways = computed(() => [
  { name: t('btv.pages.about.pathways.discovery.name'), description: t('btv.pages.about.pathways.discovery.description') },
  { name: t('btv.pages.about.pathways.connection.name'), description: t('btv.pages.about.pathways.connection.description') },
  { name: t('btv.pages.about.pathways.empowerment.name'), description: t('btv.pages.about.pathways.empowerment.description') },
])

function toggleCollapse(index) {
  const pos = collapsed.value.indexOf(index)
  if (pos > -1) collapsed.value.splice(pos, 1)
  else collapsed.value.push(index)
}
</script>

<style>
.principle > .content, .value > .content {
  margin: 10px 0;
}

h4 {
  text-align: left !important;
}
</style>
