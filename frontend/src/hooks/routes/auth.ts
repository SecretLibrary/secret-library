import useAuthStore from '@/stores/auth'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { storeToRefs } from 'pinia'

export function useAuthentication () {
  return {
    async beforeEnter (before: RouteLocationNormalized, after: RouteLocationNormalized, next: NavigationGuardNext) {
      const authStore = useAuthStore()
      const { isAuthenticated } = storeToRefs(authStore)
      if (!isAuthenticated.value) {
        await authStore.fetchMe()
      }

      if (isAuthenticated.value) {
        next()
      } else {
        next('/auth/login')
      }
    }
  }
}
