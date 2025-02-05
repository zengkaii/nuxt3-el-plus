<template>
  <ClientOnly>
    <div>page1</div>
  </ClientOnly>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log('page1 mounted')
})
</script>

<style scoped></style>
