import { createRouter, createWebHistory } from 'vue-router'
import mainRoutes from './mainRoutes'
import authRoutes from './authRoutes'
import errors from './errors'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...mainRoutes,
    ...authRoutes,
    ...errors
  ]
})

export default router
