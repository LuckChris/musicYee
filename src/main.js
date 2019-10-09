import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/app.less'
import http from '@/utils/http'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.prototype.http = http



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
