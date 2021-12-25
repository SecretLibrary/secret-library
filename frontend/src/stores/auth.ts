import { defineStore } from 'pinia'
import axios from 'axios'

const useAuthStore = defineStore('auth', {
  state: () => ({
  }),
  actions: {
    async login (accessToken: string) {
      const response = await axios.post('http://localhost:3005/api/auth/kakao', {
        accessToken
      })
      console.log(response)
    }
  }
})

export default useAuthStore
