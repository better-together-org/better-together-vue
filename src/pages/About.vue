<template>
  <div id="about">
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>About Us</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>
            Better Together is a cooperative organization based in
            L'anse au Loup, NL and Montréal, QC. We are an
            alliance of people, communities, and community organizations
            working together and
            supporting one another in the pursuit of shared goals that help
            make the world a better place.
          </p>
          <p>
            We promote local resilience by encouraging
            people to be kind, communicate with and support one another, and
            share their knowledge, skills, resources and time.
          </p>
        </div>
      </div>
    </section>

    <Membership />
  </div>
</template>

<script>
// @ is an alias to /src
import Membership from './Membership.vue'

export default {
  name: 'About',
  components: {
    Membership,
  },
}
</script>
