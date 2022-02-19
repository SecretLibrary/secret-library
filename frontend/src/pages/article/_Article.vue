<template>
  <div>
    Hello Article!
    <div>
      {{ article }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { Article } from '@/types/article.type'

const route = useRoute()

const article = ref<Article.Article>()

onMounted(async () => {
  const articleId = route.params.articleId
  article.value = await axios.get(`/article/${articleId}`)
  console.log('fucking', article)
})
</script>

<style scoped>

</style>
