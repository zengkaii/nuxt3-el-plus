<template>
  <div class="deliveryOrderx">
    <ListTable ref="listTableRef" :records="records" height="1000px" :options="option" @on-click-cell="clickCell">
      <ListColumn field="id" title="field" :width="100">
        <template #customLayout="{ table, row, col, rect, record, height, width }">
          <Group :height="height" :width="width" display="flex" flex-direction="row" flex-wrap="nowrap">
            <Image id="icon0" :width="50" :height="50" :image="svg" :corner-radius="25" />
          </Group>
        </template>
      </ListColumn>
      <ListColumn field="id" title="fieldx" :width="100">
        <template #customLayout="{ table, row, col, rect, record, height, width }">
          <Group :height="height / 2" :width="width" display="flex" align-items="flex-end">
            <Text ref="textRef" :text="getText(width)" :font-size="13" font-family="sans-serif" fill="black" />
          </Group>
        </template>
      </ListColumn>
    </ListTable>
    <el-select
      v-if="selectShow"
      ref="selectRef"
      v-model="select1"
      :style="{
        width: 100 + 'px',
        top: selectTop + 'px',
        left: selectLeft + 'px'
      }"
      filterable
      placeholder=""
      class="select-class"
      @change="selectChange"
    >
      <el-option v-for="item in 10" :key="item" :label="item" :value="item"> </el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ListTable, ListColumn, Group, Image, Text } from '@visactor/vue-vtable'
const select1 = ref('')
const selectRef = ref()
const selectShow = ref(false)
const selectTop = ref(0)
const selectLeft = ref(0)

function generateRandomString(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

const generatePersons = (count) => {
  return Array.from(new Array(count)).map((_, i) => {
    const first = generateRandomString(10)
    const last = generateRandomString(4)
    return {
      id: i + 1,
      email1: `${first}_${last}@xxx.com`,
      name: first,
      lastName: last,
      address: `No.${i + 100} ${generateRandomString(10)} ${generateRandomString(5)} ${generateRandomString(5)}`,
      sex: i % 2 === 0 ? 'boy' : 'girl',
      work: i % 2 === 0 ? 'back-end engineer' : 'front-end engineer',
      city: 'beijing'
    }
  })
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
  <path fill="#165DFF" d="M8.604 4.854a.5.5 0 1 0-.708-.708L5.25 6.793 4.104 5.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
  <path fill="#165DFF" fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.461.307c-.144.342-.308.559-.472.689A.874.874 0 0 1 6 2.184a.874.874 0 0 1-.567-.188c-.164-.13-.328-.347-.472-.69A.5.5 0 0 0 4.5 1h-3Zm.5 9V2h2.184c.167.313.374.579.63.78.342.272.745.404 1.186.404.44 0 .844-.133 1.187-.403A2.45 2.45 0 0 0 7.816 2H10v8H2Z" clip-rule="evenodd"/>
</svg>
`

function getText(val) {
  return val || 'no data'
}
const records = ref([])
const columns = [
  {
    field: 'id',
    title: 'ID',
    width: 80,
    sort: true
  },
  {
    field: 'lastName',
    title: 'Full name'
  },
  {
    field: 'address',
    title: 'location\n(arcoVue-editor)',
    width: 400,
    editor: 'arcoVue-editor'
  }
]

const option = {
  enableLineBreak: true,
  autoWrapText: true,
  limitMaxAutoWidth: 700,
  heightMode: 'autoHeight',
  editCellTrigger: 'click',
  keyboardOptions: {
    copySelected: true,
    pasteValueToCell: true,
    selectAllOnCtrlA: true
  }
}
const selectCellInfo = ref({})
function clickCell(data) {
  console.log(data)
  selectCellInfo.value = {
    field: data.field,
    originData: data.originData,
    row: data.row
  }
  selectTop.value = data.cellRange.top
  selectLeft.value = data.cellRange.left
  selectShow.value = true
  setTimeout(() => {
    selectRef.value.focus()
    selectRef.value.toggleMenu()
  })
}

const listTableRef = ref(null)
function selectChange(val) {
  for (let index = 0; index < records.value.length; index++) {
    if (records.value[index].id === selectCellInfo.value.originData.id) {
      records.value[index][selectCellInfo.value.field] = val
      break
    }
  }
  listTableRef.value.vTableInstance.setRecords(records.value)

  selectShow.value = false
}

onMounted(() => {
  console.time('init1')
  records.value = generatePersons(300)
  console.timeEnd('init1')
  console.time('init2')
  nextTick(() => {
    console.timeEnd('init2')
  })
})
</script>

<style scoped lang="scss">
.deliveryOrderx {
  position: relative;
  .select-class {
    position: absolute;
    top: 0;
    z-index: 100;
  }
}
</style>
