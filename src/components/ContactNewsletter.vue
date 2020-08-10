<template>
  <section
    id="newsletter"
    class="container"
  >
    <div class="row heading">
      <div class="col-md">
        <h2>Subscribe to Our Mailing List</h2>
      </div>
    </div>
    <div class="row mt-4 mb-4">
      <div class="col-md-6 text-center offset-md-3">
        <div id="mailchimp-form">
          <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup">
            <form
              id="mc-embedded-subscribe-form"
              action="https://bebettertogether.us18.list-manage.com/subscribe/
              post?u=0be40107acc153f4e778be0bd&amp;id=c5bb99f5c5"
              method="post"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <div class="indicates-required mb-2">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                  </label>
                  <input
                    id="mce-EMAIL"
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email form-control"
                    required
                  >
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">First Name </label>
                  <input
                    id="mce-FNAME"
                    type="text"
                    value=""
                    name="FNAME"
                    class="form-control"
                  >
                </div>
                <div class="mc-field-group">
                  <label for="mce-LNAME">Last Name </label>
                  <input
                    id="mce-LNAME"
                    type="text"
                    value=""
                    name="LNAME"
                    class="form-control"
                  >
                </div>
                <div
                  id="mce-responses"
                  class="clear"
                >
                  <div
                    id="mce-error-response"
                    class="response"
                    style="display:none"
                  />
                  <div
                    id="mce-success-response"
                    class="response"
                    style="display:none"
                  />
                </div>
                <!-- real people should not fill this in and expect good
                  things - do not remove this or risk form bot signups-->
                <div
                  style="position: absolute; left: -5000px;"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_0be40107acc153f4e778be0bd_c5bb99f5c5"
                    tabindex="-1"
                    value=""
                  >
                </div>
                <div class="clear mt-3">
                  <input
                    id="mc-embedded-subscribe"
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    class="button btn btn-primary"
                  >
                </div>
              </div>
            </form>
          </div>
          <!--End mc_embed_signup-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ContactNewsletter',
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
