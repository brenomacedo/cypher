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
        }
    ]
})

export default router