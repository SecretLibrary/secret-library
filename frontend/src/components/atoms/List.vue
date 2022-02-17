<template>
  <ul>
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
