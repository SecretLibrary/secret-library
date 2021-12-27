<template>
  <div class="relative w-full h-full">
    <AppBar
      :isScrolled="isScrolledY"
    />
    <main class="mx-auto max-w-7xl w-full h-full">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import AppBar from '@/components/organisms/AppBar.vue'
import useScrollObserver from '@/hooks/utils/useScrollObserver'
import { onMounted } from 'vue'
import useAuthStore from '@/stores/auth'

const { isScrolledY } = useScrollObserver()

onMounted(useAuthStore().me)
</script>

<style scoped>

</style>
