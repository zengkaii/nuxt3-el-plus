<template>
  <ClientOnly>
    <lottie-player
      v-if="showLottie"
      autoplay
      loop
      style="width: 400px"
      src="https://lottie.host/844ba406-b54f-4eff-b366-c1b38f9fc322/pYBf9Lz5LX.json"
      speed="1"
    />
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
