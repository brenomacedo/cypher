<template>
  <div class="container">
      <div class="animation">
          <lottie :options="defaultOptions" />
          <p>Look where you are...</p>
      </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie'
import animationData from '../assets/animations/notfound.json'

export default {
    name: "notfound",
    components: {
        'lottie': Lottie
    },
    data() {
        return {
            defaultOptions: { autoplay: true, loop: true, animationData }
        }
    }
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
}

.animation {
    width: 400px;
}

.container p {
    text-align: center;
    font-family: var(--roboto);
    font-size: 20px;
    font-weight: bolder;
    margin-top: 30px;
}
</style>