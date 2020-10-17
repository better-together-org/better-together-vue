<template>
  <div
    id="tech-for-good"
  >
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>Tech For Good</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>
            Tech for good is an initiative that pairs non-profits with
            software developers to build software and operations solutions
            to strengthen and support our communities.
          </p>
          <p>
            If you would like to learn more about the tech industry or become
            involved, please reach out to us. No previous experience or
            technical skills required. We would like to create new
            community opportunities and we are looking for help.
          </p>
          <p>
            Do you or someone you know enjoy connecting with others? They
            might be good at communcation and outreach. We believe that people
            should be able to get paid to do what they love. Everyone needs
            good communicators on their teams!
          </p>
          <p>
            We will try to help direct anyone who is interested in learning a
            new skill and helping out to online resources and mentorship
            sessions to help acquire the skills needed to get the work done.
          </p>
          <p>
            We are looking to engage with communities to see what problems
            that people face in their lives, and be able to guide people to
            solve those problems and add value to their communities.
          </p>
          <p>
            If would like to learn how to start a career in the tech industry,
            help people solve their problems, or know of any community groups
            that could use a hand, please get in touch.
          </p>

          <div class="text-center">
            <!-- eslint-disable max-len -->
            <a
              href="/contact?utm_source=better-together&utm_medium=better-together&utm_campaign=tech-for-good"
              class="btn btn-primary card-action"
            >Learn more</a>
          </div>
        </div>
      </div>
    </section>

    <OpenSourceSoftware />
  </div>
</template>

<script>
// @ is an alias to /src
import OpenSourceSoftware from './OpenSourceSoftware.vue'

export default {
  name: 'TechForGood',
  components: {
    OpenSourceSoftware,
  },
}
</script>

<style lang="scss">
</style>
