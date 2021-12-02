import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVueKakaoSdk } from 'vue3-kakao-sdk'
import { router } from '@/routes'

import App from './App.vue'

import '@/assets/styles/tailwind.scss'
import '@/assets/styles/main.scss'

createApp(App)
  .use(createPinia())
  .use(createVueKakaoSdk('318af20a7053527c45e06cc36e01aac2'))
  .use(router)
  .mount('#app')
