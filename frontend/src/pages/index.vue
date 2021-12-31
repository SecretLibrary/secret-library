<template>
  <div>
    Hello World!
    <ul>
      <li>
        <Button class="btn-primary mt-2" @click="onClickApiTest">
          API Test
        </Button>
      </li>
      <li>
        <Button class="btn-login-google" @click="onClickGoLogin">
          Login
        </Button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

import { useRouter } from 'vue-router'
import axios from 'axios'
import Button from '@/components/atoms/Button.vue'

const router = useRouter()

async function onClickApiTest () {
  const result = await axios.get('/article/123')
  console.log(result)
}

function onClickGoLogin () {
  router.push('/auth/login')
}
</script>

<style scoped lang="scss">
</style>
