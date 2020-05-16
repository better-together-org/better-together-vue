<template>
  <div id="about">
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>About</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
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
