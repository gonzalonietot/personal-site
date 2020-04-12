<template>
  <div id="app">
    <Toolbar />
    <Home />
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar,
    Home
  }
}
</script>

<style>
@import 'styles/_app.scss';
</style>
