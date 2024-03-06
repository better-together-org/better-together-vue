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
          The Better Together movement is a vibrant community dedicated to fostering
          interconnectedness, growth, and positive change. Grounded in the belief that unity,
          compassion, and collective action can transform our world, we draw strength from our
          diverse perspectives and shared commitment to making a difference.
        </p>
        <p>
          Better Together is more than just a movement; it's a promise—a promise to build a future
          where compassion, diversity, and action converge to create lasting change. We invite you
          to join us on this journey, to bring your unique voice and vision to our collective
          efforts.
        </p>
      </div>
    </section>
    <img
      class="bt-banner img-fluid mx-auto d-block"
      :src="BtBannerImg"
      alt="Better Together"
    >
    <!-- <Partners /> -->
    <ContactNewsletter />
  </div>
</template>

<script>
// @ is an alias to /src
import BtBannerImg from '../assets/betterTogetherBanner.png'
import ContactNewsletter from '../components/ContactNewsletter.vue'
// import Partners from './Partners.vue'

export default {
  name: 'Home',
  components: {
    ContactNewsletter,
    // Partners,
  },
  data() {
    return {
      BtBannerImg,
    }
  },
}
</script>

<style scoped lang="scss">
  h2 {
    margin-bottom: 1.5rem;
  }

  .bt-banner {
    margin-bottom: 15px;
    border-radius: 10px;
  }
</style>
