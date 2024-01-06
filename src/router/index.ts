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
      component: () => import('../views/plugin/impl/FancyNpcs/FancyNpcs.vue')
    },
    {
      path: '/FancyNpcs/Download',
      name: 'fn-download',
      component: () => import('../views/plugin/impl/FancyNpcs/FN-Downloads.vue')
    },
    {
      path: '/FancyHolograms',
      name: 'fancyholograms',
      component: () => import('../views/plugin/impl/FancyHolograms/FancyHolograms.vue')
    },
    {
      path: '/FancyHolograms/Download',
      name: 'fh-download',
      component: () => import('../views/plugin/impl/FancyHolograms/FH-Downloads.vue')
    },
    {
      path: '/Impressum',
      name: 'impressum',
      component: () => import('../views/Impressum.vue')
    },
    {
      path: '/Datenschutz',
      name: 'datenschutz',
      component: () => import('../views/Datenschutz.vue')
    },
  ]
})

export default router
