import Vue from 'vue'
import Router from 'vue-router'

import Movie from './views/Movie.vue'
// movie 二级路由
import nowplaying from './components/nowplaying'
import comingsoon from './components/comingsoon'
// 从nowplaying跳转至影院列表
import Theaters from './views/Theaters.vue'

import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Movie',
      // name: 'home',
      component: Movie,
      redirect: '/Movie/nowplaying',
      children: [
        {
          path: 'nowplaying',
          component: nowplaying
        },
        {
          path: 'comingsoon',
          component: comingsoon
        }
      ]
    },
    {
      path: '/Theaters/:filmId',
      // name: 'home',
      component: Theaters,
    }, 
    {
      path: '/Cinema',
      // name: 'home',
      component: Cinema
    },
    {
      path: '/Center',
      // name: 'home',
      component: Center
    },
    {
      path: '/',
      // name: 'home',
      component: Movie,
      redirect: '/Movie/nowplaying'
    },  

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
