import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import(/* webpackChunkName: "Home" */ './pages/Home.vue')
        },
        {
            path: "/login",
            name: "login",
            component: () => import(/* webpackChunkName: "Login" */ './pages/Login.vue')
        },
        {
            path: "/register",
            name: "register",
            component: () => import(/* wepackChunkName: "Register" */ './pages/Register.vue')
        },
        {
            path: "/forgot-password",
            name: "forgotpassword",
            component: () => import(/* webpackChunkName: "ForgotPassword" */ './pages/ForgotPassword.vue')
        },
        {
            path: "/reset-password",
            name: "resetpassword",
            component: () => import(/* webpackChunkName: "ResetPassword" */ './pages/ResetPassword.vue')
        },
        {
            path: "/reset-password/success",
            name: "rpsuccess",
            component: () => import(/* webpackChunkName: "ResetPasswordSuccess" */ './pages/ResetPasswordSuccess.vue')
        },
        {
            path: "/register/success",
            name: "rsuccess",
            component: () => import(/* webpackChunkName: "RegisterSuccess" */ './pages/RegisterSuccess.vue')
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import(/* webpackChunkName: "Profile" */ './pages/Profile.vue')
        },
        {
            name: "viewprofile",
            path: "/profile/view",
            component: () => import(/* webpackChunkName: "ViewProfile" */ './pages/ViewProfile.vue')
        },
        {
            name: "viewcommunity",
            path: "/community/view",
            component: () => import (/* webpackChunkName: "ViewCommunity" */ './pages/ViewCommunity.vue')
        },
        {
            path: "*",
            name: "notfound",
            component: () => import(/* webpackChuknName: "NotFound" */ './pages/NotFound.vue')
        }
    ]
})

export default router