import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router,
  vuetify: new Vuetify({
  }),
  render: h => h(App),
}).$mount('#app')