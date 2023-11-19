import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/FancyNpcs',
      name: 'fancynpcs',
      component: () => import('../views/plugin/impl/FancyNpcs.vue')
    },
    {
      path: '/FancyHolograms',
      name: 'fancyholograms',
      component: () => import('../views/plugin/impl/FancyHolograms.vue')
    }
  ]
})

export default router
