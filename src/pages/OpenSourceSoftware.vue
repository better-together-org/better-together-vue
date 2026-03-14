<template>
  <section id="open-source-software">
    <div class="row heading mb-3">
      <div class="col-md">
        <h2>Open Source Software</h2>
        <p>
          Open source software is software that is collaboratively designed
          and released to the public to give back and ensure that everyone
          has access to and understands the technology.
        </p>
        <p>
          We are actively looking for support from the public in building and
          maintaining the open source projects listed below. We are looking
          for more then just software developers! Anyone with writing skills,
          research, marketing, or communications would be really helpful.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-header">
                <h5>
                  <RouterLink
                    to="/projects/community-engine"
                    title="Better Together Community Engine"
                    class="card-title"
                  >
                    Better Together Community Engine
                  </RouterLink>
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  The Better Together Community Engine is an open-source plugin
                  that allows developers to build community features into their
                  apps with ease. There is currently a Ruby on Rails gem and a
                  Django package version.
                </p>
              </div>
              <div class="cta card-footer text-center">
                <RouterLink
                  to="/projects/community-engine"
                  title="Better Together Community Engine"
                  class="btn btn-primary card-action"
                >
                  Learn more
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-header">
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
              </div>
              <div class="card-body">
                <p class="card-text">
                  DRAW is a citizen science project that aims to engage citizens
                  to recover historic weather observations from the archives and
                  make the data available for use in climate research.
                </p>
              </div>
              <div class="cta card-footer text-center">
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
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss">
</style>
