<template>
  <div>
    Hello World!
    <button type="button" @click="onClickGoUser">
      Go User
    </button>
  </div>
</template>

<script lang="ts" setup>

import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

async function onClickGoUser () {
  const result = await axios.get('/article/123')
  console.log(result)
}
</script>

<style scoped lang="scss">

</style>
