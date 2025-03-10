<template>
  <ClientOnly>
    <!-- save code ，whole page will  refresh -->
    <div>page2222</div>
  </ClientOnly>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log('page22 mounted')
})
</script>

<style scoped></style>
