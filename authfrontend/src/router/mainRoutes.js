import HomeView from '../views/HomeView.vue'
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

const authenticated = async (to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.user) {
    try {
      const { data } = await axios.get('/api/user');
      authStore.user = data;
      next()
    } catch (error) {
      next('/login')
    }
  } else {
    next()
  }
}

const verifiedEmail = (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.user.email_verified_at === null) {
    next('/verification-notification')
  } else {
    next()
  }
}

const unVerified = (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.user.email_verified_at !== null) {
    next('/')
  } else {
    next()
  }
}

const mainRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: [authenticated, verifiedEmail]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    beforeEnter: [authenticated, verifiedEmail]
  },
  {
    path: '/verification-notification',
    alias: '/email' ,
    name: 'email-verification',
    component: () => import('../views/VerificationNotificationView.vue'),
    beforeEnter: [authenticated, unVerified]
  }
]

export default mainRoutes;