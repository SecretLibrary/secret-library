<template>
  <div class="container h-screen flex justify-center items-center">
    <div class="p-8 bg-white rounded-lg max-w-6xl">
      <h2 class="font-bold text-2xl text-center mb-8">로그인</h2>
      <button type="button" ref="btnRef" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import useAuthStore from '@/stores/auth'

import { onMounted, ref } from 'vue'
import { useKakao } from 'vue3-kakao-sdk'
import { useRouter } from 'vue-router'

const router = useRouter()

const btnRef = ref<HTMLElement>()
const { kakao, initialize } = useKakao()

const authStore = useAuthStore()

onMounted(async () => {
  await initialize()
  if (!btnRef.value) {
    return
  }

  kakao.value.Auth.createLoginButton({
    container: btnRef.value,
    async success (params) {
      const { access_token: accessToken } = params
      await authStore.login(accessToken)

      router.push('/')
    },
    fail (err) {
      console.error(err)
    }
  })
})
</script>

<style scoped lang="scss">

</style>
