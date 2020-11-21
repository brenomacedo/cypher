import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import(/* webpackChunkName: "Login" */ './components/Home.vue')
        }
    ]
})

export default router