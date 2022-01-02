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
  const result = await axios.post('/article', {
    imageUrlList: [],
    articleItems: [{
      title: 'Hello World title 1',
      text: 'Hello World text 1',
      order: 0
    }, {
      title: 'Hello World title 2',
      text: 'Hello World text 2',
      order: 1
    }, {
      title: 'Hello World title 3',
      text: 'Hello World text 3',
      order: 2
    }],
    bookInfo: {
      title: 'Hello World'
    }
  })
  console.log(result)
}

function onClickGoLogin () {
  router.push('/auth/login')
}
</script>

<style scoped lang="scss">
</style>
