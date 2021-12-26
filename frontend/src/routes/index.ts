import {
  createWebHistory,
  createRouter,
  RouteRecordRaw
} from 'vue-router'

import { useAuthentication } from '@/hooks/routes/auth'

//  Layouts
import defaultLayout from '@/layouts/layout.default.vue'
import authLayout from '@/layouts/layout.auth.vue'

//  Pages
import Home from '@/pages/index.vue'
import User from '@/pages/user/user.index.vue'
import Login from '@/pages/auth/auth.login.vue'
import { useDark, useToggle } from '@vueuse/core'

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
        component: User
      }
    ],
    ...useAuthentication()
  },
  {
    path: '/auth',
    name: 'Authentication',
    component: authLayout,
    children: [
      {
        path: 'login',
        component: Login
      }
    ],
    beforeEnter () {
      const isDarkMode = useDark()
      const toggleDarkMode = useToggle(isDarkMode)
      toggleDarkMode(false)
    }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
