import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/adminPage.vue'),
      children:[
        {
          path: '/admin/incoomeWrite',
          name: 'incoomeWrite',
          component: () => import('../views/components/incoomeWrite.vue'),
        },
        {
          path: '/admin/dataViews',
          name: 'dataViews',
          component: () => import('../views/components/dataViews.vue'),
        },
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/userPage.vue'),
      children:[
        {
          path: '/user/incomeQuery',
          name: 'incomeQuery',
          component: () => import('../views/components/incomeQuery.vue'),
        },
        {
          path: '/user/recruitInfo',
          name: 'recruitInfo',
          component: () => import('../views/components/recruitInfo.vue'),
        },
      ]
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: () => import('../views/index.vue')
    // }
  ]
})

export default router
