<template>
  <div
    id="home"
    class="container"
  >
    <section
      id="introduction"
    >
      <div class="col">
        <h2>We are Better Together</h2>
        <p>
          Better Together is an organization of progressive people and
          organizations working together to build a better world.
          We promote local resilience by encouraging
          people to be kind, communicate with and support one another, and
          share their knowledge, skills, resources and time.
        </p>
      </div>
    </section>

    <section id="projects">
      <h2>Our Projects</h2>
      <h5>
        <a
          href="https://github.com/better-together-org/community-engine"
          target="bt-community-engine"
          title="DRAW: Data Rescue Archives and Weather"
        >
          Better Together Community Engine
        </a>
      </h5>
      <p>
        The better together community engine is a Ruby on Rails plugin
        that allows developers to build community features into their
        apps with ease.
      </p>
      <h5>
        <a
          href="https://alpha.joatu.org/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
          target="joatu"
          title="Joatu"
        >
          Joatu Community Exchange
        </a>
      </h5>
      <p>
        Joatu is an application that allows people and organizations to
        come together to exchange goods, services, and volunteering.
        Joatu aims to work with community organizations to reduce waste
        and excess consumption.
      </p>
      <h5>
        <a
          href="https://citsci.geog.mcgill.ca/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
          target="draw"
          title="DRAW: Data Rescue Archives and Weather"
        >
          DRAW: Data Rescue Archives and Weather
        </a>
      </h5>
      <p>
        DRAW is a citizen science project that aims to engage citizens
        to recover historic weather observations from the archives and
        make the data available for use in climate research.
      </p>
    </section>
    <section>
      <h2>
        Camp Better Together
      </h2>
      <p>
        Camp Better Together is a one-of-a-kind Really Remote Work (RRW)
        co-working and co-living wilderness camping community. If you work
        remotely and enjoy hiking, camping, and adventure, this is for you!
        For more information <router-link to="/contact">contact us!</router-link>
      </p>
    </section>

    <section id="partners">
      <h2>Our Partners</h2>
      <p>
        Better Together is proud to partner with organizations that support
        our goals. If you would like to become a partner, please
        <a href="mailto: info@bettertogethersolutions.com">get in touch</a>.
      </p>
      <p>
        <a
          href="http://alpha.joatu.org/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
          target="joatu"
          title="Joatu"
        >
          <img
            src="assets/images/partners/joatu.png"
            alt="Joatu"
            width="300"
          >
        </a>
        <a
          href="https://citsci.geog.mcgill.ca/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
          target="draw"
          title="DRAW: Data Rescue Archives and Weather"
        >
          <img
            src="assets/images/partners/DRAW.png"
            alt="DRAW: Data Rescue Archives and Weather"
            width="300"
          >
        </a>
        <a
          href="https://www.colibri-software.com/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
          target="draw"
          title="Colibri Software"
        >
          <img
            src="assets/images/partners/colibri-software-logo-and-text-large.png"
            alt="Colibri Software"
            width="300"
          >
        </a>
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style scoped lang="scss">
  h2 {
    margin-bottom: 1.5rem;
  }
</style>
