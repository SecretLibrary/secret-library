<template>
  <div>
    <List>
      <template v-for="(item, index) in articles" :key="index">
        <a class="px-2 py-2 mb-2 rounded shadow-sm cursor-pointer" :href="`/article/${item._id}`">
          <h2 class="text-xl font-bold">
            {{ item.bookInfo.title }}
          </h2>
          <div>
            {{ item.userInfo?.userName ?? '-' }}
          </div>
          <template
            v-for="(title, titleIndex) in item.articleItems.map(x => x.title)"
            :key="`${titleIndex}-title`"
          >
            <div>
              {{ title }}
            </div>
          </template>
        </a>
      </template>
    </List>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { Article } from '@/types/article.type'

import axios from 'axios'

import List from '@/components/atoms/List.vue'
import ListItem from '@/components/atoms/ListItem.vue'

const router = useRouter()

const articles = ref<Article.Article[]>([])

async function fetchArticle () {
  const result: Article.Article[] = await axios.get('/article')
  articles.value = result
}

function onClickGoLogin () {
  router.push('/auth/login')
}

onMounted(fetchArticle)
</script>

<style scoped lang="scss">
</style>
