import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueLocalStorage from 'vue-localstorage'
import Vuex from 'vuex'

import {routes} from './routes'
const STORAGE_KEY='todo-storage'


export const eventBus = new Vue();
Vue.use(Vuex)
Vue.use(VueLocalStorage)
Vue.use(VueRouter);



const router = new VueRouter({
  routes,
  mode:'history',
})
new Vue({
  el: '#app',
  router,
  STORAGE_KEY,
  render: h => h(App)
})
