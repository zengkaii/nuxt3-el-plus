<template>
  <div>
    <h1>this is home</h1>
    <button style="margin-right: 20px" @click="showPage = 'page1'">page1</button>
    <button @click="showPage = 'page2'">page2</button>
    <Page1 v-if="showPage === 'page1'" />
    <Page2 v-if="showPage === 'page2'" />
  </div>
</template>
<script setup lang="ts">
import Page1 from './page1.vue'
import Page2 from './page2.vue'
const showPage = ref('page1')
onMounted(() => {
  console.log('index mounted')
})
</script>
