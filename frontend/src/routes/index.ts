import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

//  Layouts
import defaultLayout from '@/layouts/default.vue'

//  Pages
import Home from '@/pages/index.vue'

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
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
