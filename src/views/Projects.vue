<template>
  <div
    id="projects"
    class="container"
  >
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>Projects</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Better Together aims to bring people together to build great
                things!
                These are some of the projects that Better Together and our
                partners have been working on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>Open Source Software</h2>
        </div>
      </div>
      <div class="row">

        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <h5>
                <router-link
                  to="/projects/community-engine"
                  title="Better Together Community Engine"
                  class="card-title"
                >
                  Better Together Community Engine
                </router-link>
              </h5>
              <p class="card-text">
                The Better Together Community Engine is an open-source plugin
                that allows developers to build community features into their
                apps with ease. There is currently a Ruby on Rails gem and a
                Django package version.
              </p>
              <div class="cta text-center">
                <router-link
                  to="/projects/community-engine"
                  title="Better Together Community Engine"
                  class="btn btn-primary card-action"
                >Learn more</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <h5>
                <a
                  class="card-title"
                  href="https://alpha.joatu.org/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
                  target="joatu"
                  title="Joatu"
                >
                  Joatu Community Exchange
                </a>
              </h5>
              <p class="card-text">
                Joatu is an application that allows people and organizations to
                come together to exchange goods, services, and volunteering.
                Joatu aims to work with community organizations to reduce waste
                and excess consumption.
              </p>
              <div class="cta text-center">
                <a
                  href="https://alpha.joatu.org/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
                  target="joatu"
                  title="Joatu"
                  class="btn btn-primary card-action"
                >Learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <h5>
                <a
                  class="card-title"
                  href="https://citsci.geog.mcgill.ca/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
                  target="draw"
                  title="DRAW: Data Rescue Archives and Weather"
                >
                  DRAW: Data Rescue Archives and Weather
                </a>
              </h5>
              <p class="card-text">
                DRAW is a citizen science project that aims to engage citizens
                to recover historic weather observations from the archives and
                make the data available for use in climate research.
              </p>
              <div class="cta text-center">
                <a
                  href="https://citsci.geog.mcgill.ca/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
                  target="draw"
                  title="DRAW: Data Rescue Archives and Weather"
                  class="btn btn-primary card-action"
                >Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>Camp Better Together</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Camp Better Together is a one-of-a-kind Really Remote Work (RRW)
                co-working and co-living wilderness camping community. If you work
                remotely and enjoy hiking, camping, and adventure, this is for you!
              </p>
              <div class="cta text-center">
                <router-link
                  to="/contact"
                  class="btn btn-primary card-action"
                >
                  Learn more
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Projects',
}
</script>

<style lang="scss">
</style>
