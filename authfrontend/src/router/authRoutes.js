import { useAuthStore } from '@/stores/auth';

const guest = async (to, from, next) => {
  const authStore = useAuthStore();  

  if (!authStore.user) {
    next()
  } else {
    next('/')
  }
}

const authRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    beforeEnter: guest
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    beforeEnter: guest
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ResetPasswordView.vue'),
    beforeEnter: guest
  },
  {
    path: '/password-reset/:token',
    name: 'reset-password',
    component: () => import('../views/NewPasswordView.vue'),
    beforeEnter: guest
  }
]

export default authRoutes;