<template>
  <NuxtLayout />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.vxe-table--render-default .vxe-table--body-wrapper {
  background-color: transparent !important;
}
</style>
