<template>
  <div
    id="home"
    class=""
  >
    <section
      id="introduction"
    >
      <div class="col">
        <h2>We are Better Together</h2>
        <p>
          Better Together is a cooperative organization. It represents an
          alliance of progressive people and teams who work together and
          support one another in the pursuit of shared goals that help make
          the world a better place for everyone.
        </p>
        <p>
          In line with the values proposed in The Leap's Green New Deal,
          Better Together works towards causes including climate justice and
          reconciliation.
        </p>
        <p>
          We promote local resilience by encouraging
          people to be kind, communicate with and support one another, and
          share their knowledge, skills, resources and time.
        </p>
      </div>
    </section>

    <Projects />
    <Partners />
    <ContactNewsletter />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactNewsletter from '../components/ContactNewsletter.vue'
import Projects from './Projects.vue'
import Partners from './Partners.vue'

export default {
  name: 'Home',
  components: {
    ContactNewsletter,
    Projects,
    Partners,
  },
}
</script>

<style scoped lang="scss">
  h2 {
    margin-bottom: 1.5rem;
  }
</style>
