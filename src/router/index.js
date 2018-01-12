import Vue from 'vue'
import Router from 'vue-router'
import hot from './../components/hot/hot'
import invite from './../components/invite/invite'
import search_menu from './../components/search_menu/search_menu'
import no_hot from './../components/no_not/not_hot'
import detail from './../components/detail/detail'
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
      path: '/detail?pro_id=id',
      component: detail
    },
    {
      path: '/hot',
      name: 'hot',
      component: hot
    }
  ]
})
