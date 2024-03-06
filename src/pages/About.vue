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
        <h4 @click="toggleCollapse(index)">
          {{ principle.name }}
        </h4>
        <div v-if="!collapsed.includes(index)" class="content">
          <p>{{ principle.description }}</p>
        </div>
      </div>
    </section>

    <section class="core-values">
      <h2>Our Core Values</h2>
      <p>
        At the heart of Better Together lies a vision of a world transformed by compassion,
        strength, and unity. Our mission is grounded in five foundational principles that guide our
        actions and aspirations. Together, these principles form a robust framework for change,
        drawing on the power of Love, Inclusivity, Care, Resilience, and Hope.
      </p>
      <div v-for="(value, index) in values" :key="`value-${index}`" class="value">
        <h4 @click="toggleCollapse(index + principles.length)">
          {{ value.name }}
        </h4>
        <div v-if="!collapsed.includes(index + principles.length)" class="content">
          <p>{{ value.description }}</p>
        </div>
      </div>
    </section>

    <section class="transformative-pathways">
      <h2>Our Transformative Pathways</h2>
      <p>
        At Better Together, our journey towards creating a more inclusive, resilient world is
        propelled by three key
        mechanisms: Discovery, Connection, and Empowerment. These mechanisms are the steps we take
        to turn our foundational principles into action, fostering a community that's vibrant,
        united, and impactful.
      </p>
      <div v-for="(pathway, index) in pathways" :key="`pathway-${index}`" class="pathway">
        <h4>{{ pathway.name }}</h4>
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
        {
          name: 'Love',
          description: 'Everything begins with Love. It\'s the spark that ignites our passion for making a difference and the bond that unites us as a community. Love is the unconditional acceptance and profound empathy we share, inspiring us to act with kindness and generosity.',
        },
        {
          name: 'Inclusivity',
          description: 'Building on the foundation of Love, we embrace Inclusivity. Our movement is a mosaic of diverse voices, experiences, and perspectives. By valuing and integrating this diversity, we ensure that every member feels seen, heard, and valued. Inclusivity strengthens our unity and enriches our collective creativity and problem-solving abilities.',
        },
        {
          name: 'Care',
          description: 'With a commitment to Love and a framework of Inclusivity, we practice Care in every interaction and decision. Care is our proactive approach to nurturing the well-being of our community and our environment. It reflects our dedication to supporting each other\'s growth and addressing the needs of our planet with diligence and respect.',
        },
        {
          name: 'Resilience',
          description: 'The strength of our movement is amplified by Resilience. In the face of challenges and setbacks, Resilience empowers us to persevere, adapt, and thrive. It is the grit that sustains our journey, ensuring that we can overcome obstacles together and emerge stronger and more united.',
        },
        {
          name: 'Hope',
          description: 'Our journey culminates in Hope. It is the horizon we strive towards—a world of possibility, justice, and peace. Hope is our unwavering belief in our collective power to enact change and create a brighter future for all.',
        },
      ],
      values: [
        { name: 'Curiosity', description: 'It all starts with curiosity, an openness to learn about others, understand their needs, and explore how to address challenges collectively. This value lays the foundation for meaningful engagement and innovation within the community.' },
        { name: 'Kindness', description: 'With curiosity piqued, kindness becomes the natural next step, where empathy and compassion guide interactions. Kindness creates a welcoming environment that encourages participation and supports emotional well-being.' },
        { name: 'Generosity', description: 'Kindness in action leads to generosity, where members are motivated to share their time, resources, and expertise. Generosity reinforces the community’s strength, ensuring resources are available to support collective goals.' },
        { name: 'Reciprocity', description: 'Generosity fosters a culture of reciprocity, where exchanges are mutual and beneficial. This value ensures that giving and receiving are balanced, promoting sustainability and equity within the community.' },
        { name: 'Cooperation', description: 'Reciprocity sets the stage for cooperation, where members collaborate towards common objectives. Cooperation harnesses the diverse skills and perspectives within the community, driving effective problem-solving and innovation.' },
        { name: 'Solidarity', description: 'Cooperation deepens into solidarity, a commitment to standing together in support of shared causes and challenges. Solidarity emphasizes unity and collective action, particularly in addressing social inequality and promoting justice.' },
        { name: 'Accountability', description: 'Solidarity requires accountability, ensuring that individuals and the community as a whole are responsible for their actions and commitments. Accountability builds trust, ensuring everyone upholds the community’s values and works towards its vision.' },
        { name: 'Stewardship', description: 'Finally, stewardship encapsulates the responsibility to manage and care for community resources and the environment sustainably. It’s a commitment to the long-term well-being of the community, ensuring that the collective efforts today will benefit future generations.' },
        { name: 'Stewardship', description: 'Finally, stewardship encapsulates the responsibility to manage and care for community resources and the environment sustainably. It’s a commitment to the long-term well-being of the community, ensuring that the collective efforts today will benefit future generations.' },
      ],
      pathways: [
        {
          name: 'Discovery',
          description: 'Our journey begins with Discovery—a quest for knowledge, understanding, and innovation. Discovery is the spark of curiosity that drives us to explore new ideas, learn from diverse perspectives, and uncover the needs and strengths of our community. It challenges us to think differently, to question the status quo, and to seek solutions that are both creative and effective. In the spirit of Discovery, we encourage continuous learning and growth, ensuring that our movement is always evolving, always forward-looking.',
        },
        {
          name: 'Connection',
          description: 'With the insights and understanding gained from Discovery, we forge Connections. These are the bonds that unite us, the relationships that strengthen our community, and the networks that amplify our impact. Connection is about more than just working together; it\'s about building a sense of belonging, understanding, and mutual support. It\'s through these connections that we share our hopes, our dreams, and our challenges, creating a fabric of solidarity that is both resilient and expansive.',
        },
        {
          name: 'Empowerment',
          description: 'Empowerment is the culmination of our efforts, where Discovery and Connection translate into action and impact. It\'s about equipping each member of our community with the tools, resources, and confidence to make a difference. Empowerment means providing opportunities for leadership, fostering a culture of innovation, and enabling every voice to be heard. It\'s through Empowerment that we turn our collective vision into reality, driving positive change in our communities and beyond.',
        },
      ],
    }
  },
  methods: {
    toggleCollapse(index) {
      const pos = this.collapsed.indexOf(index)
      if (pos > -1) this.collapsed.splice(pos, 1)
      else this.collapsed.push(index)
    },
  },
}
</script>

<style>
/* Adjusted for readability and design */
.principle > .content, .value > .content {
  margin: 10px 0;
}

h4 {
  text-align: left !important;
}
</style>
