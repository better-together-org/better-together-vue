<template>
  <div
    id="tech-for-good"
  >
    <section>
      <div class="row heading">
        <div class="col-md">
          <h2>Tech For Good</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <p>
            Tech for Good embodies a transformative approach where technology serves as a bridge
            between non-profits and vibrant communities, fostering development and resilience
            through innovative software and operational solutions. Our mission is not just about
            creating technology; it's about leveraging these tools to empower communities and make
            a tangible impact on the lives within them.
          </p>

          <p>
            We invite you to explore the realm of technology with us, regardless of your prior
            experience or technical expertise. Our initiative is built on the principle of
            inclusivity, aiming to cultivate new opportunities for community engagement. We are on
            the lookout for individuals passionate about making a difference—no previous tech
            background required.
          </p>

          <p>
            Do you have a knack for connecting with people, or know someone who does? Exceptional
            communication skills are at the heart of our mission, as they lay the foundation for
            outreach and collaboration. We champion the idea that one should be able to earn a
            livelihood through their passions. Effective communicators are invaluable, as they help
            weave the fabric of our community-focused teams.
          </p>

          <p>
            For those eager to contribute but uncertain where to start, we offer access to online
            resources and mentorship programs. These are designed to equip you with the skills
            necessary to contribute meaningfully to our projects and the community at large.
          </p>

          <p>
            Our engagement goes beyond technological solutions; we seek to understand the
            challenges faced by communities firsthand. By identifying these issues, we aim to guide
            individuals towards solving them, thereby enhancing the value they bring to their
            communities.
          </p>

          <p>
            Whether you're interested in kickstarting a career in technology, eager to solve
            real-world problems, or aware of community groups in need of support, we encourage you
            to connect with us. Together, we can explore how technology can serve as a force for
            good, transforming challenges into opportunities for growth and positive change.
          </p>

          <p>
            For more information or to get involved, please don't hesitate to reach out. Let's
            harness the power of technology for the betterment of our communities together.
          </p>

          <div class="text-center">
            <!-- eslint-disable max-len -->
            <a
              href="/contact?utm_source=better-together&utm_medium=better-together&utm_campaign=tech-for-good"
              class="btn btn-primary card-action"
            >Learn more</a>
          </div>
        </div>
      </div>
    </section>

    <OpenSourceSoftware />
  </div>
</template>

<script>
// @ is an alias to /src
import OpenSourceSoftware from './OpenSourceSoftware.vue'

export default {
  name: 'TechForGood',
  components: {
    OpenSourceSoftware,
  },
}
</script>

<style lang="scss">
</style>
