import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

//  Layouts
import defaultLayout from '@/layouts/default.vue'

//  Pages
import Home from '@/pages/index.vue'
import Login from '@/pages/auth/login.vue'

import useAuthStore from '@/stores/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: defaultLayout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: defaultLayout,
    children: [
      {
        path: '',
        component: Home
      }
    ],
    beforeEnter (before, after, next) {
      const authStore = useAuthStore()
      const isAuthenticated = authStore.isAuthenticated
      if (isAuthenticated) {
        next()
      } else {
        next('/auth/login')
      }
    }
  },
  {
    path: '/auth',
    name: 'Authentication',
    component: defaultLayout,
    children: [
      {
        path: 'login',
        component: Login
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
