import axios from 'axios'
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueLoading from 'crip-vue-loading'

Vue.use(BootstrapVue)
Vue.use(VueLoading, {
  axios,
  applyOnRouter: true,
  color: '#42b983',
  height: '3px',
})
