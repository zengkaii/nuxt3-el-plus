<template>
  <ClientOnly>
    <lottie-player v-if="showLottie" autoplay loop style="width: 400px" src="/loading.json" speed="1" />
  </ClientOnly>
</template>

<script setup lang="ts">
const showLottie = ref(false)
onMounted(() => {
  nextTick(() => {
    showLottie.value = true
  })
})
</script>
