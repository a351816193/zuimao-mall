import Vue from 'vue'
import Router from 'vue-router'
import hot from './../components/hot/hot'
import invite from './../components/invite/invite'
import search_menu from './../components/search_menu/search_menu'
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
      path: '/search_menu',
      component: search_menu
    },
    {
      path: '/hot',
      name: 'hot',
      component: hot
    }
  ]
})
