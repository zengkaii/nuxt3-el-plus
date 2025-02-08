import 'vxe-table/lib/style.css'
import VXETable from 'vxe-table'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VXETable)
})
