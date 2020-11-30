import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBell, faUserFriends, faCog, faSearch, faUsers,
  faTimes, faThumbsUp, faPlay, faPlus, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
import 'aos/dist/aos.css'

library.add(faHome, faBell, faUserFriends, faCog, faSearch,
  faUsers, faTimes, faThumbsUp, faPlay, faPlus, faDoorOpen)

Vue.component('font-awesome', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
