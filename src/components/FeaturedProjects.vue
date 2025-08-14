<template>
  <section>
    <div class="row heading">
      <div class="col-md">
        <h2>Featured Projects</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div class="card-deck">
          <div class="card text-center">
            <div class="card-header">
              <h5>
                Newcomer Navigator NL
              </h5>
            </div>
            <div class="card-body text-center">
              <a
                href="https://newcomernavigatornl.ca?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=logo"
                target="newcomernavigatornl"
                title="Newcomer Navigator NL"
              >
                <img
                  src="/assets/images/projects/newcomer-navigator-logo.png"
                  alt="Newcomer Navigator NL"
                  class="project-logo"
                >
              </a>
              <p class="card-text mt-3">
                A Community Engine–based platform helping newcomers find
                resources, services, and community connections across
                Newfoundland and Labrador.
              </p>
            </div>
            <div class="cta card-footer text-center">
              <a
                href="https://newcomernavigatornl.ca?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=button"
                target="newcomernavigatornl"
                title="Newcomer Navigator NL"
                class="btn btn-primary card-action"
              >Learn more</a>
            </div>
          </div>
          <div class="card text-center">
            <div class="card-header">
              <h5>
                NL Venues
              </h5>
            </div>
            <div class="card-body text-center">
              <a
                href="https://nlvenues.com?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=logo"
                target="nlvenues"
                title="NL Venues"
              >
                <img
                  src="/assets/images/projects/nl-venues-logo.png"
                  alt="NL Venues"
                  class="project-logo"
                >
              </a>
              <p class="card-text mt-3">
                A Community Engine–powered directory for venues and events,
                connecting artists, organizers, and spaces in Newfoundland
                and Labrador.
              </p>
            </div>
            <div class="cta card-footer text-center">
              <a
                href="https://nlvenues.com?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=button"
                target="nlvenues"
                title="NL Venues"
                class="btn btn-primary card-action"
              >Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedProjects',
}
</script>

<style lang="scss" scoped>
  /* Keep featured project logos visually consistent */
  .project-logo {
    max-height: 150px;
    width: auto;
    display: block;
    margin: 0 auto;
    object-fit: contain;
  }
</style>
