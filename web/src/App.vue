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
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
