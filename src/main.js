import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/app.less'
import http from '@/utils/http'
import util from '@/utils/util'
import store from '@/store/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.prototype.http = http
Vue.prototype.util = util



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,

  // 监听解决需要登录的页面但是直接输入路由就直接进入了页面
  watch:{
    $route(to) {
      if(to.meta.auth) {
        if(util.get('token') == null && to.path !== '/login') {
          router.replace({
            path: '/login'
          })
        }
      }
    }
  }
}).$mount('#app')

  router.beforeEach((to, from, next) => {
    if(to.meta.auth) {
      if(util.get('token') == null && to.path !== '/login') {
        next({
          path: '/login'
        })
      } else{
        next()
      }
    } else {
      next()
    }
  })


router.afterEach(() => {
  // 离开页面关闭所有的弹窗
  store.commit('modifySlider', false)

})
