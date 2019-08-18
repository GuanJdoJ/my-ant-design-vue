import common from "@/layout/common"

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index'),
    meta: {title: '首页', icon: 'dashboard'}
  },
  {
    path: 'form',
    component: common,
    //redirect: '/form/baseForm',
    meta: {title: '表单', icon: 'form'},
    children: [{
      path: '/form/baseForm',
      name: 'BaseForm',
      component: () => import('@/views/form/index'),
      meta: {title: '基础表单', icon: 'form', parentName:'form'}
    }, {
      path: '/form/stepForm',
      name: 'StepForm',
      component: () => import('@/views/form/stepForm/StepForm'),
      meta: {title: '分布表单', icon: 'form', parentName:'form'}
    }]
  },
  {
    path: 'table',
    component: common,
    //redirect: 'table/index',
    meta: {title: '表格', icon: 'table'},
    children: [{
      path: '/table/index',
      name: 'Table',
      component: () => import('@/views/table/index'),
      meta: {title: '表格', icon: 'table', parentName:'table'}
    }]
  },
  /*{
    path: 'table',
    name: 'table',
    component: () => import('@/views/table/index'),
    meta: {title: '表格', icon: 'table'}
  }*/
]
