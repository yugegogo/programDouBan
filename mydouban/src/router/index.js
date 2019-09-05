import Vue from 'vue'
import Router from 'vue-router'
import shouye from "../pages/shouye"
import login from "../pages/login"
import zhuce from "../pages/zhuce"
import daohang from "../pages/daohang"
import movie  from '../pages/movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/daohang',
      name: 'daohang',
      component: daohang
    },
    {
      path: '/movie',
      name: 'movie',
      component:movie
    },
  ]
})
