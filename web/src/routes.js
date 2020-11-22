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
        }
    ]
})

export default router