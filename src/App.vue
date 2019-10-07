<template>
  <div class="container">

    <router-view name="add"></router-view>
    <router-view name="sub"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body {

  margin-top: 60px;
}
</style>
