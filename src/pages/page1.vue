<template>
  <ClientOnly>
    <div>page1</div>
  </ClientOnly>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log('page111 mounted')
})
</script>

<style scoped></style>
