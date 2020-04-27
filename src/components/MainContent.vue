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
  #main-content {
    height: 70vh;
    overflow-y: scroll;
    padding-top: 2.5vh;
    padding-bottom: 2.5vh;

    text-align: center;

    section {
      background: #ffffff;
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 15px;
    }
  }
</style>
