import Vue from 'vue'
import Router from 'vue-router'
import api from './api'
import store from './store'
import firebase from './firebase'

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
            component: () => import(/* webpackChunkName: "Login" */ './pages/Login.vue'),
            meta: { requiresVisitor: true }
        },
        {
            path: "/register",
            name: "register",
            component: () => import(/* wepackChunkName: "Register" */ './pages/Register.vue'),
            meta: { requiresVisitor: true }
        },
        {
            path: "/forgot-password",
            name: "forgotpassword",
            component: () => import(/* webpackChunkName: "ForgotPassword" */ './pages/ForgotPassword.vue'),
            meta: { requiresVisitor: true }
        },
        {
            path: "/reset-password",
            name: "resetpassword",
            component: () => import(/* webpackChunkName: "ResetPassword" */ './pages/ResetPassword.vue'),
            meta: { requiresVisitor: true }
        },
        {
            path: "/reset-password/success",
            name: "rpsuccess",
            component: () => import(/* webpackChunkName: "ResetPasswordSuccess" */ './pages/ResetPasswordSuccess.vue'),
            meta: { requiresVisitor: true }
        },
        {
            path: "/register/success",
            name: "rsuccess",
            component: () => import(/* webpackChunkName: "RegisterSuccess" */ './pages/RegisterSuccess.vue'),
            meta: { requiresVisitor: true }
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import(/* webpackChunkName: "Profile" */ './pages/Profile.vue'),
            meta: { requiresAuth: true }
        },
        {
            name: "viewprofile",
            path: "/profile/view",
            component: () => import(/* webpackChunkName: "ViewProfile" */ './pages/ViewProfile.vue'),
            meta: { requiresAuth: true }
        },
        {
            name: "viewcommunity",
            path: "/community/view",
            component: () => import (/* webpackChunkName: "ViewCommunity" */ './pages/ViewCommunity.vue'),
            meta: { requiresAuth: true }
        },
        {
            name: "editprofile",
            path: "/profile/edit",
            component: () => import(/* webpackChunkName: "EditProfile" */ './pages/EditProfile.vue'),
            meta: { requiresAuth: true }
        },
        {
            name: "searchfriends",
            path: "/search-friends",
            component: () => import(/* webpackChunkName: "SearchFriends" */ './pages/SearchFriends.vue'),
            meta: { requiresAuth: true }
        },
        {
            name: "notifications",
            path: "/notifications",
            component: () => import(/* webpackChunkName: "Notifications" */ './pages/Notifications.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: "*",
            name: "notfound",
            component: () => import(/* webpackChuknName: "NotFound" */ './pages/NotFound.vue')
        }
    ]
})

router.beforeEach((from, to, next) => {
    if(store.getters.isAuth === undefined) {
        
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                user.getIdToken().then(token => {
                    api.post('/user', {}, {
                        headers: {
                            authorization: token
                        }
                    }).then(resp => {

                        const { id, uuid, name, description, avatar,
                            banner, createdAt, updatedAt } = resp.data

                        store.dispatch('setUser', { id, uuid, name, description, avatar,
                            banner, createdAt, updatedAt, token })
                        store.dispatch('setIsAuth', true)

                        if(from.meta.requiresVisitor) {
                            next({
                                name: "profile"
                            })
                        } else {
                            next()
                        }

                    }).catch(() => {
                        store.dispatch('setIsAuth', false)

                        if(from.meta.requiresAuth) {
                            next({
                                name: "login"
                            })
                        } else {
                            next()
                        }
                    })
                    
                    
                }).catch(() => {
                    if(from.meta.requiresVisitor) {
                        next({
                            name: "profile"
                        })
                    } else {
                        next()
                    }
                })
            } else {
                store.dispatch('setIsAuth', false)
                if(from.meta.requiresAuth) {
                    next({
                        name: 'login'
                    })
                } else {
                    next()
                }
            }
        })
        
    } else {
        if(from.meta.requiresAuth) {
            if(store.getters.isAuth) {
                next()
            } else {
                next({
                    name: 'home'
                })
            }
        } else if (from.meta.requiresVisitor){
            if(store.getters.isAuth) {
                next({
                    name: "profile"
                })
            } else {
                next()
            }
        } else {
            next()
        }
    }
})

export default router