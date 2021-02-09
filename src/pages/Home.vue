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
          Better Together is a community innovation accelerator. We build
          public community infrastructure to help make the world a
          better place and help communities care for and support
          one
          another and share their knowledge, skills, and resources to promote
          local resilience and community empowerment.
        </p>
      </div>
    </section>
    <img
      class="bt-banner img-fluid mx-auto d-block"
      :src="BtBannerImg"
      alt="Better Together"
    >
    <Partners />
    <ContactNewsletter />
  </div>
</template>

<script>
// @ is an alias to /src
import BtBannerImg from '../assets/bt-sunset-banner-1300x480px.jpg'
import ContactNewsletter from '../components/ContactNewsletter.vue'
import Partners from './Partners.vue'

export default {
  name: 'Home',
  components: {
    ContactNewsletter,
    Partners,
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
