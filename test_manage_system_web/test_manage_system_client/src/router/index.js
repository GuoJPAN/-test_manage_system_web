import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/components/common/base/Home.vue'),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/dashboard',
          component: () => import('@/components/view/index/index'),
          meta: { title: '系统首页' }
        },
        {
          path: '/showEcharts',
          component: () => import('@/components/view/showEcharts/index_echarts'),
          meta: { title: '一个div多个echarts图' }
        },
        {
          path: '/showTabEcharts',
          component: () => import('@/components/view/showEcharts/tab_echarts'),
          meta: { title: 'tab页echarts' }
        },
        {
          path: '/docIndex',
          component: () => import('@/components/view/doc/docIndex'),
          meta: { title: 'tab页echarts' }
        },
        {
          path: '/myBoard',
          component: () => import('@/components/view/doc/myBoard'),
          meta: { title: '看板' }
        },
        {
          path: '/test',
          component: () => import('@/components/view/test'),
          meta: { title: '调试调试' }
        },
        {
          path: '/test001',
          component: () => import('@/components/view/rain'),
          meta: { title: '爷爷' }
        }
      ]
    }
  ]
})
