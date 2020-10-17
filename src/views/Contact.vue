<template>
  <div>
    <section
      id="contact"
      class="container"
    >
      <div class="row heading">
        <div class="col-md">
          <h2>Contact us</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>
            If you're interested in learning more or want to contribute,
            please send us an email at
            <a href="mailto: info@bettertogethersolutions.com">
              info@bettertogethersolutions.com
            </a> or using the form below.
          </p>
          <p>* means a field is required</p>

          <form
            class="form needs-validation"
            data-netlify-recaptcha="true"
            name="contact"
            netlify
          >
            <div class="form-row mb-4">
              <div class="col">
                <label for="contact-name">Name</label>
                <input
                  class="form-control"
                  id="contact-name"
                  name="name"
                  placeholder="Name"
                  type="text"
                >
              </div>
              <div class="col">
                <label for="contact-email">Email *</label>
                <input
                  class="form-control"
                  id="contact-email"
                  name="email_address"
                  placeholder="you@yoursite.com"
                  type="email"
                  required
                >
                <div class="invalid-feedback">
                  Please use a valid email
                </div>
              </div>
            </div>
            <div class="form-row mb-4">
              <div class="col">
                <label for="contact-message">Message *</label>
                <textarea
                  class="form-control"
                  cols="30"
                  id="contact-message"
                  name="message"
                  rows="10"
                  required
                  ></textarea>
              </div>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <button
              class="btn btn-primary"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    <ContactNewsletter />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactNewsletter from '../components/ContactNewsletter.vue'

export default {
  name: 'Contact',
  components: {
    ContactNewsletter,
  },
}
</script>

<!-- <link
  href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
  rel="stylesheet"
  type="text/css"
> -->

<style scoped lang="scss">
  label {
    font-weight: bold;
  }
</style>
