<template>
  <div>
    <h1>this is home1</h1>
    <div>
      <div>components in page : it will refresh</div>
      <button style="margin-right: 20px" @click="showPage = 'page1'">page1</button>
      <button @click="showPage = 'page2'">page2</button>
      <Page1 v-if="showPage === 'page1'" />
      <Page2 v-if="showPage === 'page2'" />
    </div>
    <div style="margin-top: 100px">
      <div>components in components : it will not refresh</div>
      <button style="margin-right: 20px" @click="showPage2 = 'comA'">pageA</button>
      <button @click="showPage2 = 'comB'">pageB</button>
      <ComA v-if="showPage2 === 'comA'" />
      <ComB v-if="showPage2 === 'comB'" />
    </div>
  </div>
</template>
<script setup lang="ts">
import ComA from '../components/comA.vue'
import ComB from '../components/comB.vue'
import Page1 from './page1.vue'
import Page2 from './page2.vue'
const showPage = ref('page1')
const showPage2 = ref('comA')
onMounted(() => {
  console.log('index mounted')
})
</script>
