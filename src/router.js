import Vue from 'vue'
import Router from 'vue-router'

import Movie from './views/Movie.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      // name: 'home',
      component: Movie
    },
    {
      path: '/cinema',
      // name: 'home',
      component: Cinema
    },
    {
      path: '/center',
      // name: 'home',
      component: Center
    },
    {
      path: '/',
      // name: 'home',
      component: Movie
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
