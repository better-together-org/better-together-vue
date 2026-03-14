<template>
  <div>
    <section
      id="contact"
      class="container"
    >
      <div class="row heading">
        <div class="col-md">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>
            If you're interested in learning more or want to contribute,
            please send us an email at
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
import ContactNewsletter from '../components/ContactNewsletter.vue'
</script>

<style scoped lang="scss">
label {
  font-weight: bold;
}
</style>
