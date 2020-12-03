import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBell, faUserFriends, faCog, faSearch, faUsers,
  faTimes, faThumbsUp, faPlay, faPlus, faDoorOpen, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueToastify from 'vue-toastify'
import store from './store'
import 'aos/dist/aos.css'

Vue.use(VueToastify, {
  position: "top-right",
  canPause: true,
  canTimeout: true,
  defaultTitle: true,
  duration: 3000
})

library.add(faHome, faBell, faUserFriends, faCog, faSearch,
  faUsers, faTimes, faThumbsUp, faPlay, faPlus, faDoorOpen, faPause)

Vue.component('font-awesome', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
