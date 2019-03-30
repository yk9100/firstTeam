import Vue from 'vue'
import Router from 'vue-router'

import Movie from './views/Movie.vue'
// movie 二级路由
import nowplaying from './components/nowplaying'
import comingsoon from './components/comingsoon'

// 从nowplaying跳转至影院列表
import Theaters from './views/Theaters.vue'

import Cinema from './views/Cinema.vue'

import Register from './views/Register.vue'

import Center from './views/Center.vue'
import Show from './views/Show.vue'


//购物车
import Cart from './views/Cart.vue'

import MyCenter from './views/MyCenter.vue'
import MyOrder from './views/MyOrder.vue'
import Passport from './views/Passport.vue'
import MyShop from './views/MyShop.vue'
import MyCards from './views/MyCards.vue'
import MyTickets from './views/MyTickets.vue'
import MovieOnline from './views/MovieOnline.vue'
//Center 二级路由
import Accountlogin from './components/AccountLogin.vue'
import Phonelogin from './components/PhoneLogin.vue'
import Detail from './components/comingsoon/Detail'





Vue.use(Router)

export default new Router({
    routes: [
    {
            path: '/Movie',
            // name: 'home',
            component: Movie,
            redirect: '/Movie/nowplaying',
            children: [{
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
            redirect: '/center/accountlogin',
            component: Center,
            children: [{
                    path: 'accountlogin',
                    component: Accountlogin
                },
                {
                    path: 'phonelogin',
                    component: Phonelogin
                }
            ],

        },
        {
            path: '/mycenter',
            component: MyCenter,
        },
        {
            path: '/myorder',
            component: MyOrder
        },
        {
            path: '/register',
            component: Register,
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
            path: '/Detail/:id',
            component: Detail
    },
    {
      path: '/passport',
      component: Passport
    },
    {
      path: '/myshop',
      component: MyShop
    },
    {
      path: '/mytickets',
      component: MyTickets
    },
    {
      path: '/mycards',
      component: MyCards,
    },
    {
      path: '/movieonline',
      component: MovieOnline,
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