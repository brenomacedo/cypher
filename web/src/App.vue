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
  --seablue: #0d00ff;
  --dark-seablue: #0800a1;
  --green: #00a166;
  --dark-green: #006942;
  --red: #fc0339;
  --dark-red: #c4002b;
  --light-red: #ff5252;
  --selected: #f2f2f2;
  --light-yellow: #ddf590;
  --disabled: #bfbfbf;
  --shadow-disabled: #8f8f8f;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  background-color: var(--form-bg);
}

::-webkit-scrollbar {
    width: 3px;
    height: 3px;
}

::-webkit-scrollbar-thumb {
    background: var(--underwater);
}
</style>
