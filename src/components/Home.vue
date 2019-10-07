<template>
  <div >
    <h1>Home</h1>

  </div>

</template>

<script>
  import Addition from './Addition'
export default {
  name: 'Home',
  components: {
    'app-addition': Addition
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
