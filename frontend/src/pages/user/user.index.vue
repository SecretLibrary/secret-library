<template>
  Hello {{ user.userName }}
</template>

<script lang="ts" setup>
import useAuthStore from '@/stores/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

</script>

<style scoped>

</style>
