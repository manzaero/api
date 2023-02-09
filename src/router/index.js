import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/add',
    name: 'Adding',
    component: () => import('../views/Adding.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('../views/Reg'),
    meta: {
      layout: 'auth',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to,from,next) => {
  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['api/isAuth']){
    next()
  } else if (requireAuth && !store.getters['api/isAuth']){
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
