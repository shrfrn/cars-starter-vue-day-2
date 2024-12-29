import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import CarIndex from '@/pages/CarIndex.vue'
import CarDetails from '@/pages/CarDetails.vue'
import CarEdit from '@/pages/CarEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/car',
      name: 'CarIndex',
      component: CarIndex
    },
    {
      path: '/car/:id',
      name: 'CarDetails',
      component: CarDetails
    },
    {
      path: '/car/edit/:id?',
      name: 'CarEdit',
      component: CarEdit
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/About.vue')
    }
  ]
})

export default router
