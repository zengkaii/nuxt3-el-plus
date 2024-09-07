<template>
  <div class="common-layout">
    <el-config-provider :locale="zhCn" :message="config" :empty-values="['']" :value-on-clear="() => ''">
      <el-container>
        <NuxtPage v-slot="{ Component }" >
          <component :is="Component" />
        </NuxtPage>
      </el-container>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const config = ref({
  grouping: true,
  max: 3
})
</script>

<style scoped lang="scss">
</style>
