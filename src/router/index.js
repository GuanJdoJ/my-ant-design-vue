import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
import sideBarPath from './sideBarPath'
import Exception404 from '@/views/exception/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: sideBarPath,
    },
    {
      path: '/404',
      component: Exception404
    },
    {
      path: '*', redirect: '/404', hidden: true
    }
  ]
})
