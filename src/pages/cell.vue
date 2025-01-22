<template>
  <Group>
    <Text :text="text" />
  </Group>
</template>

<script setup lang="ts">
import { Group, Image, Tag, Text } from '@visactor/vue-vtable'
defineProps({
  text: {
    type: String,
    default: 'text'
  }
})
</script>

<style scoped></style>
