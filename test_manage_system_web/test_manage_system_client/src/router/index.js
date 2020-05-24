import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/components/common/base/Home.vue'),
      meta: { title: '自述文件' },
      children:[{
        path: '/dashboard',
        component: () => import('@/components/view/index/Dashboard'),
        meta: { title: '系统首页' }
      },{
        path: '/test',
        component: () => import('@/components/view/test'),
        meta: { title: '调试调试' }
      }
      ]
    },
  ]
})
