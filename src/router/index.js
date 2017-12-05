import Vue from 'vue'
import Router from 'vue-router'
import hot from './../components/hot/hot'
import invite from './../components/invite/invite'
import search_menu from './../components/search_menu/search_menu'

import hot_products from './../components/hot/hot_products'
import no_hot from './../components/no_not/not_hot'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hot'
    },
    {
      path: '/invite',
      component: invite
    },
    {
      path: '/not_hot',
      components: no_hot
    },
    {
      path: '/search_menu',
      component: search_menu
    },
    {
      path: '/hot',
      name: 'hot',
      component: hot,
      children: [
        {
          path: '/hot_products',
          component: hot_products
        }
      ]
    }
  ]
})
