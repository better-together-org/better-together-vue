<template>
  <section
    id="membership"
    class=""
  >
    <div class="row heading">
      <div class="col-md">
        <h2>Join Better Together</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <p>
          Better Together is looking for members who want to make a difference.
          Join us as we work together to make the world a better place!
        </p>
        <h5 class="text-left">
          Membership Types
        </h5>
        <ul>
          <li>Individual</li>
          <li>Organization</li>
        </ul>
        <h5 class="text-left">
          Skill Sets
        </h5>
        <p>
          We need people with the following skills:
        </p>
        <ul>
          <li>software developers</li>
          <li>strategists</li>
          <li>fund raisers</li>
          <li>project managers</li>
          <li>communications specialists</li>
          <li>and more!</li>
        </ul>
      </div>
    </div>

    <div class="cta">
      <router-link
        to="/contact"
        title="Join us!"
        class="btn btn-primary"
      >
        Join us!
      </router-link>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Membership',
}
</script>
