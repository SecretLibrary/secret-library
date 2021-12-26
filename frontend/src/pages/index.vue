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

const router = useRouter()

function onClickGoUser () {
  router.push('/user/')
}
</script>

<style scoped lang="scss">

</style>
