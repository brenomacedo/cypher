<template>
  <div class="container">
        <div class="animation">
            <lottie :options="defaultOptions" />
        </div>
        <h1>Success!</h1>
        <p>Your account has been created!</p>
        <button class="back-button">
            <div class="shadow-button">

            </div>
            <div class="real-button">
                CONTINUE
            </div>
        </button>
  </div>
</template>

<script>
import Lottie from 'vue-lottie'
import animationData from '../assets/animations/people.json'

export default {
    name: "rsuccess",
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
    padding: 30px;
    background-color: var(--green);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.animation {
    width: 500px;
}

.container h1 {
    color: white;
    font-family: var(--roboto);
    font-size: 50px;
}

.container p {
    color: white;
    font-family: var(--roboto);
    margin-bottom: 20px;
}

.back-button {
    border: 0;
    background-color: transparent;
    position: relative;
    cursor: pointer;
}

.shadow-button {
    width: 300px;
    height: 50px;
    background-color: var(--underwater);
    border-radius: 4px;
}

.real-button {
    width: 300px;
    height: 50px;
    background-color: var(--lightblue);
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 5px;
    transition: 0.5s;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.back-button:hover > .real-button {
    bottom: 0;
}

@media (max-width: 520px) {
    .animation {
        width: 300px;
    }
}
</style>