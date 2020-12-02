<template>
    <div class="container">
        <div class="form-side">
            <div class="form-side-content">
                <p>Welcome to cypher!</p>
                <lottie :options="defaultOptions" :width="500"/>
                <img src="../assets/images/logo.png" alt="logo">
            </div>
        </div>
        <div @submit="loginWithEmail" class="form">
            <form>
                <h3>Sign in to continue...</h3>
                <input v-model="email" required type="email" placeholder="Your email">
                <div class="password-input">
                    <input v-model="password" required :type="showOrHide" placeholder="Your password">
                    <span v-if="hide" @click="handleHide">SHOW</span>
                    <span v-else @click="handleHide">HIDE</span>
                </div>
                <button class="form-button" :disabled="!activeForm">
                    <div :class="{ 'button-shadow': true, 'shadow-disabled': !activeForm }">

                    </div>
                    <div :class="{ 'real-button': true, disabled: !activeForm }">
                        LOGIN
                    </div>
                </button>
                <div class="options">
                    <span @click="toForgotPassword">I forgot my password</span>
                </div>
                <br>
                <p>OR</p>
                <br>
                <button @click="loginWithGoogle" type="button" class="google-login">
                    <div :class="{ 'google-real-button': true, disabled: !activeForm }">
                        <img src="../assets/images/google.png" alt=""> LOGIN WITH GOOGLE
                    </div>
                    <div :class="{ 'google-shadow-button': true, 'shadow-disabled': !activeForm }">

                    </div>
                </button>
                <br>
                <br>
                <div class="create-account">
                    <p>Dont have an account? <strong @click="toRegister">Create one!</strong></p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Lottie from 'vue-lottie'
import NProgress from 'nprogress'
import animationData from '../assets/animations/computer.json'
import { googleLogin, emailLogin } from '../firebase'
import { mapGetters, mapActions } from 'vuex'
import api from '../api'

export default {
    name: "login",
    components: {
        'lottie': Lottie
    },
    data() {
        return {
            defaultOptions: { animationData, loop: true, autoplay: true },
            hide: true,
            email: '',
            password: '',
            activeForm: true
        }
    },
    computed: {
        showOrHide: function () {
            return this.hide ? 'password' : 'text'
        },
        ...mapGetters(['isAuth', 'user'])
    },
    methods: {
        handleHide: function () {
            this.hide = !this.hide
        },
        loginWithEmail: async function ($event) {
            if(!this.activeForm) {
                return
            }

            $event.preventDefault()
            this.activeForm = false
            NProgress.start()

            const response = await this.emailLogin(this.email, this.password)
            if(response.authenticated) {
                const user = await api.post('/user', {}, {
                    headers: {
                        authorization: response.token
                    }
                })

                const { id, uuid, name, description, avatar, banner, createdAt, updatedAt } = user.data
                
                this.setUser({
                    id, uuid, name, description, avatar, banner,
                    createdAt, updatedAt, token: response.token
                })

                NProgress.done()

                this.setIsAuth(true)
            } else {
                NProgress.done()
                this.$vToastify.error("Erro ao logar", "Email ou senha inválidos!")
                this.activeForm = true
            }
        },
        loginWithGoogle: async function() {
            if(!this.activeForm) {
                return
            }

            this.activeForm = false
            NProgress.start()
            await this.googleLogin()
            NProgress.done()
           
        },
        toRegister: function() {
            if(!this.activeForm) {
                return
            }
            this.$router.push('/register')
        },
        toForgotPassword: function () {
            if(!this.activeForm) {
                return
            }
            this.$router.push('/forgot-password')
        },
        ...mapActions(['setUser' ,'setIsAuth']),
        googleLogin,
        emailLogin
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
    outline: none;
}

.real-button {
    width: 100%;
    border-radius: 4px;
    height: 50px;
    background-color: var(--purple);
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
    background-color: var(--purple-dark);
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

.google-login {
    width: 100%;
    border: 0;
    background-color: transparent;
    margin-top: 5px;
    position: relative;
    cursor: pointer;
    outline: none;
}

.google-shadow-button {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    background-color: var(--underwater);
}

.google-real-button {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    background-color: var(--lightblue);
    position: absolute;
    bottom: 5px;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.google-real-button img {
    width: 20px;
    margin-right: 20px;
}

.google-login:hover > .google-real-button {
    bottom: 0px;
}

.create-account strong {
    color: var(--underwater);
    cursor: pointer;
}

.disabled {
    background: var(--disabled);
    cursor: initial;
}

.shadow-disabled {
    background: var(--shadow-disabled);
    cursor: initial;
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