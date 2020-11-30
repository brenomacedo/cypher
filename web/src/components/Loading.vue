<template>
  <div class="container">
      <div class="animation">
          <lottie :options="defaultOptions" />
      </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie'
import animationData from '../assets/animations/loading.json'

export default {
    name: 'loading',
    components: {
        'lottie': Lottie
    },
    data() {
        return {
            defaultOptions: {
                loop: true, autoplay: true, animationData
            }
        }
    }
}
</script>

<style scoped>
.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.animation {
    width: 100px;
}
</style>