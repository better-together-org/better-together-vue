<template>
  <div id="about">
    <section class="movement-vision">
      <h2>The Better Together Movement</h2>
      <p>
        The Better Together movement is a vibrant community dedicated to fostering
        interconnectedness, growth, and positive change. Grounded in the belief
        that unity, compassion, and collective action can transform our world, we
        draw strength from our diverse perspectives and shared commitment to
        making a difference.
      </p>
    </section>

    <section class="foundational-principles">
      <h2>Our Foundational Principles</h2>
      <div v-for="(principle, index) in principles" :key="index" class="principle">
        <button @click="toggleCollapse(index)">
          {{ principle.name }}
        </button>
        <div v-if="!collapsed.includes(index)" class="content">
          <p>{{ principle.description }}</p>
        </div>
      </div>
    </section>

    <section class="core-values">
      <h2>Our Core Values</h2>
      <div v-for="(value, index) in values" :key="`value-${index}`" class="value">
        <button @click="toggleCollapse(index + principles.length)">
          {{ value.name }}
        </button>
        <div v-if="!collapsed.includes(index + principles.length)" class="content">
          <p>{{ value.description }}</p>
        </div>
      </div>
    </section>

    <section class="transformative-pathways">
      <h2>Our Transformative Pathways</h2>
      <div v-for="(pathway, index) in pathways" :key="`pathway-${index}`" class="pathway">
        <h3>{{ pathway.name }}</h3>
        <p>{{ pathway.description }}</p>
      </div>
    </section>

    <section class="call-to-action">
      <h2>Join Us</h2>
      <p>
        Better Together is more than just a movement; it's a promise—a promise to
        build a future where compassion, diversity, and action converge to create
        lasting change. We invite you to join us on this journey, to bring your
        unique voice and vision to our collective efforts. Together, we can build a
        world that reflects our deepest values and highest aspirations.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      collapsed: [],
      principles: [
        { name: 'Love', description: 'Love is at the heart of everything we do, driving us to foster connections and support one another.' },
        { name: 'Inclusivity', description: 'We embrace diversity, ensuring everyone has a voice and can contribute to the community.' },
        { name: 'Care', description: 'Care for each other and our planet guides our actions and decisions.' },
        { name: 'Resilience', description: 'We are committed to overcoming challenges together, building a stronger, more adaptable community.' },
        { name: 'Hope', description: 'Hope inspires us to envision a better world and work tirelessly to make it a reality.' }
      ],
      values: [
        { name: 'Curiosity', description: 'It all starts with curiosity, an openness to learn about others, understand their needs, and explore how to address challenges collectively. This value lays the foundation for meaningful engagement and innovation within the community.' },
        { name: 'Kindness', description: 'With curiosity piqued, kindness becomes the natural next step, where empathy and compassion guide interactions. Kindness creates a welcoming environment that encourages participation and supports emotional well-being.' },
        { name: 'Generosity', description: 'Kindness in action leads to generosity, where members are motivated to share their time, resources, and expertise. Generosity reinforces the community’s strength, ensuring resources are available to support collective goals.' },
        { name: 'Reciprocity', description: 'Generosity fosters a culture of reciprocity, where exchanges are mutual and beneficial. This value ensures that giving and receiving are balanced, promoting sustainability and equity within the community.' },
        { name: 'Cooperation', description: 'Reciprocity sets the stage for cooperation, where members collaborate towards common objectives. Cooperation harnesses the diverse skills and perspectives within the community, driving effective problem-solving and innovation.' },
        { name: 'Solidarity', description: 'Cooperation deepens into solidarity, a commitment to standing together in support of shared causes and challenges. Solidarity emphasizes unity and collective action, particularly in addressing social inequality and promoting justice.' },
        { name: 'Accountability', description: 'Solidarity requires accountability, ensuring that individuals and the community as a whole are responsible for their actions and commitments. Accountability builds trust, ensuring everyone upholds the community’s values and works towards its vision.' },
        { name: 'Stewardship', description: 'Finally, stewardship encapsulates the responsibility to manage and care for community resources and the environment sustainably. It’s a commitment to the long-term well-being of the community, ensuring that the collective efforts today will benefit future generations.' }
      ],
      pathways: [
        { name: 'Discovery', description: 'Through Discovery, we seek to understand the world and our place within it.' },
        { name: 'Connection', description: 'Connection brings us together, forging strong bonds and shared purpose.' },
        { name: 'Empowerment', description: 'Empowerment enables us to take meaningful action, turning our vision into reality.' }
      ]
    }
  },
  methods: {
    toggleCollapse(index) {
      const pos = this.collapsed.indexOf(index)
      if (pos > -1) this.collapsed.splice(pos, 1)
      else this.collapsed.push(index)
    }
  }
}
</script>

<style>
/* Adjusted for readability and design */
.principle > .content, .value > .content {
  margin: 10px 0;
}
</style>
