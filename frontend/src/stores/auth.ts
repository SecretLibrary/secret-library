import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Auth } from '@/types/auth.type'
import { Nullable } from '@/types/base.type'

const useAuthStore = defineStore('auth', () => {
  const userRef = ref<Nullable<Auth.User>>(null)
  const isAuthenticated = computed(() => !!userRef.value)

  async function login (accessToken: string) {
    const token: string = await axios.post('/auth/kakao', {
      accessToken
    })

    localStorage.setItem('access_token', token)

    const user: Auth.User = await axios.get('/auth/me')
    userRef.value = user
  }

  return {
    user: userRef,
    isAuthenticated,
    login
  }
})

export default useAuthStore
