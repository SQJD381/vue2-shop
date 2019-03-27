// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from  'vue-infinite-scroll'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(VueLazyload,{
  loading:'static/loading-svg/loading-bars.svg',
  //try:3
  attempt:3
})
Vue.use(infiniteScroll);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
