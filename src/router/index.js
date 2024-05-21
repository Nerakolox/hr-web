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
          path: '/admin/importList',
          name: 'importList',
          // component: () => import('../views/adminPage.vue'),
        },
        {
          path: '/admin/dataViews',
          name: 'dataViews',
          // component: () => import('../views/adminPage.vue'),
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
