<template>
  <div id="app">
    <router-view />
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
:root {
  --roboto: 'Roboto', sans-serif;
  --bg-color:  #000478;
  --purple: #a615bd;
  --form-bg: #dbf8ff;
  --purple-dark: #730078;
  --lightblue: #34cceb;
  --underwater: #1e6d7d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
