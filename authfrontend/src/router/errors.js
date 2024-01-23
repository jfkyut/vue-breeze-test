const errors = [
  {
    path: '/:all(.*)',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

export default errors;