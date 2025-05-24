<template>
  <ClientOnly>
    <div style="height: 100vh">
     <el-date-picker v-model="datetimerange" type="datetimerange" placeholder="datetime"></el-date-picker>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const datetimerange = ref<Date[]>([])
</script>

<style scoped></style>
