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
      <button style="margin-right: 20px" @click="showPage2 = 'pageA'">pageA</button>
      <button @click="showPage2 = 'pageB'">pageB</button>
      <PageA v-if="showPage2 === 'pageA'" />
      <PageB v-if="showPage2 === 'pageB'" />
    </div>
  </div>
</template>
<script setup lang="ts">
import PageA from '../components/comA.vue'
import PageB from '../components/comB.vue'
import Page1 from './page1.vue'
import Page2 from './page2.vue'
const showPage = ref('page1')
const showPage2 = ref('pageA')
onMounted(() => {
  console.log('index mounted')
})
</script>
