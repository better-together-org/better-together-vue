<template>
  <div>
    <section
      id="contact"
      class="container"
    >
      <div class="row heading">
        <div class="col-md">
          <h2>{{ t('btv.pages.contact.heading') }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>
            {{ t('btv.pages.contact.body') }}
            <a href="mailto: info@bettertogethersolutions.com">
              info@bettertogethersolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
    <ContactNewsletter />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ContactNewsletter from '../components/ContactNewsletter.vue'

const { t } = useI18n()
</script>

<style scoped lang="scss">
label {
  font-weight: bold;
}
</style>
