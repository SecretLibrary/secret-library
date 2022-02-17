<template>
  Hello {{ articleId }} Article!
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()

const articleId = ref(route.params.articleId)
</script>

<style scoped>

</style>
