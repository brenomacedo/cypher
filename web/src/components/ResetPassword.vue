<template>
    <div class="container">
        <div class="form-side">
            <div class="form-side-content">
                <p>Reset password!</p>
                <lottie :options="defaultOptions" :width="500"/>
                <img src="../assets/images/logo.png" alt="logo">
            </div>
        </div>
        <div class="form">
            <form>
                <h3>Write your token to reset...</h3>
                <input required type="text" placeholder="Your reset token">
                <div class="password-input">
                    <input required :type="showOrHide" placeholder="Your password">
                    <span v-if="hide" @click="handleHide">SHOW</span>
                    <span v-else @click="handleHide">HIDE</span>
                </div>
                <input required type="password" placeholder="Confirm your password">
                <button class="form-button">
                    <div class="button-shadow">

                    </div>
                    <div class="real-button">
                        RESET
                    </div>
                </button>
                <div class="options">
                    <span>Back to login</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Lottie from 'vue-lottie'
import animationData from '../assets/animations/computer.json'

export default {
    name: "resetpassword",
    components: {
        'lottie': Lottie
    },
    data() {
        return {
            defaultOptions: { animationData, loop: true, autoplay: true },
            hide: true
        }
    },
    computed: {
        showOrHide: function () {
            return this.hide ? 'password' : 'text'
        }
    },
    methods: {
        handleHide: function () {
            this.hide = !this.hide
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--roboto);
}

.form form {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form form input {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    height: 50px;
    outline: none;
    padding-left: 12px;
    font-size: 18px;
    margin-bottom: 8px;
}

.form h3 {
    font-weight: 400;
    margin-bottom: 40px;
}

.options {
    width: 100%;
    font-size: 12px;
    margin-top: 10px;
}

.options span {
    cursor: pointer;
}

.form-button {
    width: 100%;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    margin-top: 5px;
    position: relative;
}

.real-button {
    width: 100%;
    border-radius: 4px;
    height: 50px;
    background-color: var(--green);
    position: absolute;
    left: 0;
    bottom: 5px;
    transition: 0.2s;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button-shadow {
    width: 100%;
    border-radius: 4px;
    height: 50px;
    background-color: var(--dark-green);
}

.form-button:hover > .real-button {
    bottom: 0;
}

.password-input {
    width: 100%;
    font-size: 10px;
    font-weight: bolder;
    position: relative;
}

.password-input span {
    position: absolute;
    right: 10px;
    top: 20px;
    cursor: pointer;
    user-select: none;
}

@media (max-width: 900px) {
    .container {
        flex-direction: column;
    }

    .form {
        width: 100%;
    }
}

@media (max-width: 500px) {
    .form-side-content p {
        width: 300px;
        font-size: 30px;
        text-align: center;
    }
}
</style>