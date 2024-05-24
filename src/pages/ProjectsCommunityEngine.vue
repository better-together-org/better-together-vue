<template>
  <div
    id="project-community-engine"
    class="container"
  >
    <section id="introduction">
      <div class="row">
        <div class="col-md">
          <h2>Better Together Community Engine</h2>
          <p>
            The Better Together Community Engine (BTCE) is an open-source community engagement
            platform designed to foster collaboration, communication, and connection within and
            across communities. It enables users to create, join, and invite others to both public
            and private communities, facilitating discussions, live chats, and information sharing.
          </p>

          <p>
            Developers can seamlessly integrate the BTCE into their applications, enhancing them
            with
            robust community features. The platform offers an extensible interface for modeling
            community dynamics, allowing for the representation of various real-world scenarios.
          </p>

          <p>
            At the core of the BTCE are the People and Communities object models, supported by
            additional
            classes that manage memberships, roles, and community interactions. Users can create
            communities, invite members, and track membership details, including roles and
            durations,
            ensuring a comprehensive and dynamic community experience.
          </p>
        </div>
      </div>
    </section>

    <section id="features">
      <div class="row">
        <div class="col-md">
          <h3>Features</h3>
          <ul>
            <li>
              Seamless integration with Ruby on Rails applications via the Community Engine Rails
              gem.
            </li>
            <li>Public and private community creation with flexible membership management.</li>
            <li>
              Live chat and discussion forums to facilitate real-time and asynchronous
              communication.
            </li>
            <li>
              Extensible and customizable interface for representing community dynamics and
              interactions.
            </li>
            <li>Role-based access control and detailed membership tracking.</li>
            <li>Responsive and mobile-friendly design using Bootstrap.</li>
            <li>
              Integration with Turbo and Stimulus for dynamic and interactive user experiences.
            </li>
            <li>Localization support using Rails' I18n tooling for multi-language applications.</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="purpose-vision">
      <div class="row">
        <div class="col-md">
          <h3>Purpose and Vision</h3>
          <p>
            The purpose of the Better Together Community Engine is to empower communities by
            providing
            them with the tools needed to engage, collaborate, and grow. Our vision is to create a
            platform that supports the development of inclusive, kind, and accessible communities,
            enabling people to connect and work together to solve pressing social and environmental
            challenges.
          </p>

          <p>
            By fostering a cooperative and open-source development model, we aim to build a
            sustainable
            ecosystem where developers and community members can contribute, share knowledge, and
            benefit
            from collective efforts. The Better Together Community Engine aspires to be a
            cornerstone
            for community-driven initiatives, enhancing the ability of communities to achieve their
            goals and create meaningful impact.
          </p>
        </div>
      </div>
    </section>

    <section id="ruby-on-rails">
      <div class="row">
        <div class="col-md">
          <h3>
            <a
              href="https://github.com/better-together-org/community-engine-rails"
              target="bt-community-engine-rails"
              title="Better Together Community Engine Rails"
            >
              Ruby on Rails
            </a>
          </h3>
          <p>
            The Better Together Community Engine Rails gem allows Ruby on Rails developers to
            quickly
            and easily add comprehensive community features to their applications. It leverages the
            full power of Rails, providing a robust and flexible solution for building engaging and
            dynamic community platforms.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProjectCommunityEngine',
}
</script>

<style lang="scss" scoped>
#project-community-engine {
  padding: 2rem 0;

  h2,
  h3 {
    color: #2c3e50;
  }

  p {
    color: #34495e;
    font-size: 1rem;
    line-height: 1.5;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
