<template>
<main
  id="main-content"
  class="container-fluid"
>
  <router-view/>
</main>
</template>

<script>
export default {
  name: 'BtMainContent',
}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_mixins.scss';

#main-content {
  height: 70vh;
  overflow-y: scroll;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;

  text-align: center;

  section {
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 15px;
  }
}

@include media-breakpoint-down(lg) {
  #main-content {
    height: auto;
  }
}
</style>
