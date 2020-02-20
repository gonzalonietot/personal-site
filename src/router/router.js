import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

// const Login = () => import('@/pages/Login.vue')
Vue.use(Router)
Vue.use(Vuetify)
const router = new Router ({
  mode: 'history',
  routes: [
    // {
    //   path: '/Login',
    //   name: 'Login',
    //   component: Login,
    // }
  ]
})
export default router
