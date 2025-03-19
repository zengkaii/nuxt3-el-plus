<template>
  <div>{{ id }}</div>
  <div>{{ now }}</div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = ref('')
const now = ref()
onMounted(() => {
  id.value = route.params.id
  now.value = new Date()
  console.log(id.value)
})

onActivated(() => {
  console.log('onActivated', id.value)
})
</script>

<style scoped></style>
