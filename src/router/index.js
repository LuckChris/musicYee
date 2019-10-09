
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = resolve => require(['@/components/home/index'], resolve)
const Login = resolve => require(['@/components/Login/index'], resolve)

let routes = [
  {
    path: '/',
    name: Home,
    component: Home
  },
  {
    path:'/login',
    name: Login,
    component: Login
  }
]

var router = new Router({
  mode: 'history',
  routes: routes
})

export default router
