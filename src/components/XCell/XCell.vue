<template>
  <Text :text="text" v-bind="$attrs" />
  <!-- <Group>
  </Group> -->
</template>

<script setup lang="ts">
import { Text } from '@visactor/vue-vtable'
defineProps({
  text: {
    type: String,
    default: 'text'
  }
})
</script>

<style scoped></style>
