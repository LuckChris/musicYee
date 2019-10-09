import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/app.less'
import http from '@/utils/http'

Vue.prototype.http = http



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
