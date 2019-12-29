import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  traceUser: true,
  env: 'cloud-wedt0'
})
const app = new Vue(App)
app.$mount()
