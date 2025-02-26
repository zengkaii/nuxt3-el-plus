<template>
  <!-- HTML -->
  <div class="box">
    <div class="row grid-parent">
      <div class="child xx">内容1（可能较长）</div>
      <div class="child xxx">内容2</div>
      <div class="child xxxx">内容3</div>
    </div>

    <div class="row grid-parent">
      <div class="child xx">另一行的内容Ahsjjjjssssssssssssssssssssssssssssssssssss</div>
      <div class="child xxx">内容B（可能更短）</div>
      <div class="child xxxx">内容C</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* CSS */

.box {
  width: 800px;
  overflow-x: auto;
  border: 1px solid #ccc;
}
.grid-parent {
  display: grid;
  /* 定义相同的列宽，这里使用等分（1fr） */
  grid-template-columns: repeat(3, 1fr);
}

.child {
  /* 处理内容溢出，避免撑大列宽 */
  overflow: hidden;
  /* 统一盒模型计算 */
  box-sizing: border-box;
  /* 可选：添加内边距不影响总宽度 */
  padding: 8px;
}
.xx {
  background-color: red;
  min-width: 300px;
}
.xxx {
  background-color: green;
  min-width: 200px;
}
.xxxx {
  background-color: yellow;
  min-width: 200px;
}
</style>
