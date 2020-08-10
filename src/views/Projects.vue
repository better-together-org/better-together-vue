<template>
  <div
    id="projects"
  >
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>Projects</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>
            Better Together aims to bring people together to build great
            things!
            These are some of the projects that Better Together and our
            partners have been working on.
          </p>
        </div>
      </div>
    </section>

    <section id="better-together-community-commerce">
      <div class="row heading">
        <div class="col-md">
          <h2>Better Together Community Commerce</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>
            The Better Together Community Commerce co-op platform allows
            members to tap into the community economy by bringing local
            shopping online!
          </p>
          <p>
            Being a part of the network allows people and organizations the
            convenience of shoping online while still supporting local
            businesses in their neighbourhood, city, region, or beyond!
          </p>
          <p>
            Buyers will discover the inventory of the stores around them and
            place an order for pick up or delivery. Local businesses would
            have the benefit of managing their inventory and showcasing it to
            the local community as well as offering expansion opportunities by
            tapping into the global e-commerce market.
          </p>
          <p>
            Create your online store and you will get your own storefront to
            market to your customers as well as have your products
            appear in a platform-wide storefront along with those of other
            co-op members.
          </p>
          <div class="text-center">
            <a
              href="https://commerce.bebettertogether.ca/?utm_source=better-together&utm_medium=better-together&utm_campaign=better-together"
              target="community-commerce"
              title="Better Together Community Commerce"
              class="btn btn-primary card-action"
            >Learn more</a>
          </div>
        </div>
      </div>
    </section>

    <section id="open-source-software">
      <div class="row heading">
        <div class="col-md">
          <h2>Open Source Software</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <div class="card-deck">
            <div class="card">
              <div class="card-header">
                <h5>
                  <router-link
                    to="/projects/community-engine"
                    title="Better Together Community Engine"
                    class="card-title"
                  >
                    Better Together Community Engine
                  </router-link>
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
                <router-link
                  to="/projects/community-engine"
                  title="Better Together Community Engine"
                  class="btn btn-primary card-action"
                >
                  Learn more
                </router-link>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
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
              </div>
              <div class="card-body">
                <p class="card-text">
                  Joatu is an application that allows people and organizations to
                  come together to exchange goods, services, and volunteering.
                  Joatu aims to work with community organizations to reduce waste
                  and excess consumption.
                </p>
              </div>
              <div class="cta card-footer text-center">
                <a
                  href="https://alpha.joatu.org/?utm_source=better-together&utm_medium=partner&utm_campaign=partnership"
                  target="joatu"
                  title="Joatu"
                  class="btn btn-primary card-action"
                >Learn more</a>
              </div>
            </div>
            <div class="card">
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
    </section>

    <section id="camp-better-together">
      <div class="row heading">
        <div class="col-md">
          <h2>Camp Better Together</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md">
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
