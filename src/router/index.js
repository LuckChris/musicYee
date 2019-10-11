
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = resolve => require(['@/components/home/index'], resolve)
const Login = resolve => require(['@/components/Login/index'], resolve)
const Search = resolve => require(['@/components/Search/index'], resolve)
const Slider = resolve => require(['@/components/Slider/index'], resolve)

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
  },
  {
    path:'/search',
    name: Search,
    component: Search
  },
  {
    path:'/slider',
    name: Slider,
    component: Slider
  }
]

var router = new Router({
  mode: 'history',
  routes: routes
})

export default router
