<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
:root {
  --roboto: 'Roboto', sans-serif;
  --bg-color:  #000478;
  --purple: #a615bd;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
