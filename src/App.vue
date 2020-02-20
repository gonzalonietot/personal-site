<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <About msg="Este es mi portafolio" />
  </div>
</template>

<script>
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    About
  }
}
</script>

<style>

</style>
