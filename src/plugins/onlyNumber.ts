// plugins/auth.js
export default defineNuxtPlugin((nuxtApp) => {
  // 不再是 import Vue from 'vue'的写法了
  nuxtApp.vueApp.directive('onlyNumber', {
    mounted(el) {
      const OnlyNumberReg = /[^\d]/g // 纯数字
      const OnlyNumberFun = (e) => {
        // 利用 e.isComposing 来判断是否处在汉字输入中
        if (!e.isComposing && OnlyNumberReg.test(e.target.value)) {
          e.target.value = e.target.value.replace(OnlyNumberReg, '')
        }
      }
      el.addEventListener('input', OnlyNumberFun, false)
      el.addEventListener(
        'compositionend',
        (e) => {
          // compositionend 后立即执行一次过滤函数 将汉字输入的内容过滤一次
          OnlyNumberFun(e)
        },
        false
      )
    }
  })
})
