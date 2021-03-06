
<template>
  <header
    :class="[props.isScrolled ? 'shadow-lg' : '']"
    v-bind="$attrs"
  >
    <div class="mx-auto max-w-7xl w-full flex justify-between">
      <div class="text-2xl font-bold flex items-center dark:text-gray-50 transition-colors">
        {{ title }}
      </div>
      <div class="flex items-center">
        <button
          type="button"
          class="round-btn mr-2 px-1 py-1"
          @click.prevent.stop="events.onClickToggleDarkMode"
        >
          <transition mode="out-in" name="fade">
            <MoonIcon v-if="isDarkMode" class="dark:text-white bg-transparent transition-colors" />
            <SunIcon v-else class="dark:text-white bg-transparent transition-colors" />
          </transition>
        </button>
        <template v-if="isAuthenticated">
          <button
            type="button"
            class="round-btn"
            @click="events.onClickProfile"
          >
            <img
              class="rounded-full shadow-lg w-10 h-10"
              alt="profile image"
              :src="user?.profileImage"
            />
          </button>
        </template>
        <template v-else>
          <UserIcon @click="events.onClickGoLogin"/>
        </template>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import useAuthStore from '@/stores/auth'
import useDialogStore from '@/stores/dialog'
import { MoonIcon as MoonIconRenderFn, SunIcon as SunIconRenderFn, UserIcon as UserIconRenderFn } from '@heroicons/vue/outline'
import { storeToRefs } from 'pinia'

const MoonIcon = MoonIconRenderFn()
const SunIcon = SunIconRenderFn()
const UserIcon = UserIconRenderFn()

const props = defineProps<{
  isScrolled: boolean
}>()
const authStore = useAuthStore()
const { isAuthenticated, user } = storeToRefs(authStore)

const { showConfirm } = useDialogStore()
const route = useRoute()
const router = useRouter()
const title = computed(() => route.meta.title || 'Home')

const isDarkMode = useDark()
const toggleDarkMode = useToggle(isDarkMode)

const events = {
  onClickProfile () {
    showConfirm('Do you want logout?', async confirmed => {
      if (!confirmed) {
        return
      }
      await authStore.logout()
      await router.push('/auth/login')
    }, 'Logout')
  },
  onClickToggleDarkMode () {
    toggleDarkMode()
  },
  onClickGoLogin () {
    router.push('/auth/login')
  }
}
</script>
<style scoped lang="scss">
header {
  @apply px-4 py-4 flex justify-between sticky top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 transition-all outline-none border-none;
}
.round-btn {
  @apply w-10 h-10 rounded-full;
}
</style>
