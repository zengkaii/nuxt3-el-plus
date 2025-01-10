<template>
  <div>
    <h1>首页</h1>
    <el-button type="primary" @click="showPage = 'page1'">page1</el-button>
    <el-button type="primary" @click="showPage = 'page2'">page2</el-button>
    <Page1 v-if="showPage === 'page1'" />
    <Page2 v-if="showPage === 'page2'" />
  </div>
</template>
<script setup lang="ts">
import Page1 from './page1.vue'
import Page2 from './page2.vue'
const showPage = ref('page1')
</script>
