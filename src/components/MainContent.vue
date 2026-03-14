<template>
  <main
    id="main-content"
    class="container"
  >
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';

#main-content {
  margin-bottom: 5vh;

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
    margin-bottom: 20px;
  }

  section {
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #fff;

    .heading {
      margin-top: 20px;
    }

    .card {
      border: none;
      .card-header, .card-footer {
        background: none;
        border: none;
      }

      .card-header {
        h5 {
          margin-bottom: 0;
        }
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  #main-content {
    height: auto;
  }
}
</style>
