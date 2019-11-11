import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true, injectModalsContainer: true })

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')


