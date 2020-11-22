import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import(/* webpackChunkName: "Home" */ './components/Home.vue')
        },
        {
            path: "/login",
            name: "login",
            component: () => import(/* webpackChunkName: "Login" */ './components/Login.vue')
        },
        {
            path: "/register",
            name: "register",
            component: () => import(/* wepackChunkName: "Register" */ './components/Register.vue')
        },
        {
            path: "/forgot-password",
            name: "forgotpassword",
            component: () => import(/* webpackChunkName: "ForgotPassword" */ './components/ForgotPassword.vue')
        },
        {
            path: "/reset-password",
            name: "resetpassword",
            component: () => import(/* webpackChunkName: "ResetPassword" */ './components/ResetPassword.vue')
        },
        {
            path: "/reset-password/success",
            name: "rpsuccess",
            component: () => import(/* webpackChunkName: "ResetPasswordSuccess" */ './components/ResetPasswordSuccess.vue')
        },
        {
            path: "/register/success",
            name: "rsuccess",
            component: () => import(/* webpackChunkName: "RegisterSuccess" */ './components/RegisterSuccess.vue')
        }
    ]
})

export default router