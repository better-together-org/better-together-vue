<template>
  <section>
    <div class="row heading">
      <div class="col-md">
        <h2>Featured Projects</h2>
      </div>
    </div>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card text-center h-100">
          <div class="card-header">
            <h5>Newcomer Navigator NL</h5>
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
              A Community Engine–based platform helping newcomers find resources,
              services, and community connections across Newfoundland and Labrador.
            </p>
          </div>
          <div class="cta card-footer text-center">
            <a
              href="https://newcomernavigatornl.ca?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=button"
              target="newcomernavigatornl"
              class="btn btn-primary card-action"
            >Learn more</a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card text-center h-100">
          <div class="card-header">
            <h5>NL Venues</h5>
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
              connecting artists, organizers, and spaces in Newfoundland and Labrador.
            </p>
          </div>
          <div class="cta card-footer text-center">
            <a
              href="https://nlvenues.com?utm_source=bettertogether.ca&utm_medium=website&utm_campaign=projects&utm_content=button"
              target="nlvenues"
              class="btn btn-primary card-action"
            >Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Static content — no reactive state needed
</script>

<style scoped lang="scss">
.project-logo {
  max-height: 150px;
  width: auto;
  display: block;
  margin: 0 auto;
  object-fit: contain;
}
</style>
