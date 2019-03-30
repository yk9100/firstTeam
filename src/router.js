import Vue from 'vue'
import Router from 'vue-router'

import Movie from './views/Movie.vue'
// movie 二级路由
import nowplaying from './components/nowplaying'
import comingsoon from './components/comingsoon'


import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'
import Show from './views/Show.vue'

//购物车
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      // name: 'home',
      component: Movie,
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
      component: Movie,
      redirect: '/Movie/nowplaying'
    },  
    {
      path: '/show',
      component: Show,
    },
    {
      path: '/cart',
      component: Cart
    }

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
