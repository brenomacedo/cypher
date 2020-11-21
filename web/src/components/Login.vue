<template>
    <div class="container">
        <div class="form-side">
            <div class="form-side-content">
                <p>Welcome to cypher!</p>
                <lottie :options="defaultOptions" :width="500"/>
                <img src="../assets/images/logo.png" alt="logo">
            </div>
        </div>
        <div class="form">
        </div>
    </div>
</template>

<script>
import Lottie from 'vue-lottie'
import animationData from '../assets/animations/computer.json'

export default {
    name: "login",
    components: {
        'lottie': Lottie
    },
    data() {
        return {
            defaultOptions: { animationData, loop: true, autoplay: true }
        }
    }
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
}

.form-side {
    min-height: 100vh;
    flex: 1;
    background-image: url('../assets/images/form-side-bg.png');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.form-side img {
    width: 300px;
    position: relative;
    bottom: 150px;
    margin-top: 80px;
}

.form-side-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
}

.form-side-content p {
    color: white;
    font-family: var(--roboto);
    font-weight: lighter;
    font-size: 50px;
}

.form {
    min-height: 100vh;
    width: 450px;
    background-color: var(--form-bg);
}
</style>