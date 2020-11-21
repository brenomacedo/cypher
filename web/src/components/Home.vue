<template>
    <div class="container">
        <div class="top-bar">
            <div class="logo">
                <img src="../assets/images/logo-sm.png" alt="">
            </div>
            <div class="buttons">
                <button class="login">LOGIN</button>
                <button class="sign-up">SIGN UP</button>
            </div>
        </div>
        <div class="info" data-aos="zoom-in">
            <div class="description">
                <img src="../assets/images/logo.png" alt="logo">
                <p>A social media develop to you share all your want, like what are you doing,
                    your grooves, hobbies and whatever you would like to do. So don't be shy and
                    join into this community and help us to increase it!</p>
                <button class="home-button">EXPLORE</button>
            </div>
            
            <div class="animation">
                <lottie :options="defaultOptions" :width="400" :height="400"/>
            </div>
            
        </div>
    </div>
</template>

<script>
import Lottie from 'vue-lottie'
import animationData from '../assets/animations/social-media.json'
import AOS from 'aos'
AOS.init()

export default {
    name: 'Home',
    components: {
        'lottie': Lottie
    },
    data() {
        return {
            defaultOptions: {animationData, loop: true, autoplay: true},
            animationSpeed: 1
        }
    }
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    background-color: var(--bg-color);
    background-image: url('../assets/images/home-background.svg');
    padding: 40px;
    background-position: center;
    background-size: cover;
}
.info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.description {
    margin-top: 80px;
}

.description img {
    width: 600px;
}

.description p {
    font-family: var(--roboto);
    color: white;
    font-weight: lighter;
    padding-left: 35px;
    width: 600px;
}

.animation {
    flex: 1;
    padding-top: 80px;
}

.home-button {
    background: white;
    color: var(--bg-color);
    border: 0;
    outline: none;
    margin-left: 35px;
    font-size: var(--roboto);
    margin-top: 35px;
    width: 150px;
    height: 60px;
    font-weight: bolder;
    letter-spacing: 2px;
    border-radius: 2px;
    cursor: pointer;
}

.top-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    width: 50px;
}

.buttons {
    display: flex;
}

.login {
    width: 100px;
    height: 50px;
    background-color: var(--purple);
    border: 0;
    border-radius: 2px;
    color: white;
    font-family: var(--roboto);
    display: flex;
    justify-content: center;
    outline: none;
    align-items: center;
    cursor: pointer;
}

.sign-up {
    width: 130px;
    height: 50px;
    background-color: white;
    color: var(--bg-color);
    display: flex;
    flex-direction: row;
    outline: none;
    align-items: center;
    justify-content: center;
    font-family: var(--roboto);
    border: 0;
    border-radius: 2px;
    margin-left: 5px;
    cursor: pointer;
}

@media (max-width: 1050px){
    .info {
        flex-direction: column-reverse;
    }
}

@media (max-width: 610px) {
    .description img {
        width: 300px;
        padding-left: 20px;
    }

    .description p {
        width: 400px;
    }
}
</style>