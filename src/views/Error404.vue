<template>
  <section id="error-404">
    <div class="row heading mb-3">
      <div class="col-md">
        <h2 class="mb-4">
          This is not the page you are looking for
        </h2>
        <p>
          Looks like the address that you entered does't match a page on our
          site. Perhaps the page has move to a new address. Please try again.
        </p>
        <div class="text-center mt-4">
          <router-link
            to="/"
            title="Better Together landing page"
            class="btn btn-primary card-action"
          >
            Visit Landing Page
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Error404',
}
</script>

<style lang="scss">
</style>
