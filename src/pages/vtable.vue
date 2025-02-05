<template>
  <div>
    <ClientOnly>
      <div class="page-container">
        <el-button type="primary" @click="modifyCell(1, 2)">修改[1,2]单元格的值</el-button>
        <el-auto-resizer class="auto-size" style="height: calc(100vh - 32px)">
          <template #default="{ height, width }">
            <div class="v-table-content">
              <ListTable
                ref="listTableRef"
                :records="records"
                :height="height + 'px'"
                :width="width + 'px'"
                :options="option"
                @on-click-cell="clickCell"
                @on-mouse-enter-cell="mouseenterCell"
              >
                <ListColumn color="red" title="svg" field="svg" width="200">
                  <template #customLayout="{ table, row, col, rect, record, height, width }">
                    <Group :height="height" :width="width" display="flex" flex-direction="row" flex-wrap="nowrap">
                      <Text
                        ref="textRef"
                        :text="getText(record)"
                        :font-size="13"
                        font-family="sans-serif"
                        stroke-style="red"
                        stroke-rect="50, 50, 100, 50"
                      />
                      <!-- <Tag
                        v-for="tag in 10"
                        :key="tag"
                        :text="tag"
                        :text-style="{ fontSize: 10, fontFamily: 'sans-serif', fill: 'rgb(51, 101, 238)' }"
                        :panel="{ visible: true, fill: '#f4f4f2', cornerRadius: 5 }"
                        :space="5"
                        :bounds-padding="[0, 0, 0, 5]"
                      /> -->
                      <Image id="icon0" :width="36" :height="36" :image="svg" :corner-radius="25" />
                    </Group>
                  </template>
                </ListColumn>
                <ListColumn field="selectCol" title="selectCol" width="200">
                  <template #customLayout="{ table, row, col, rect, record, height, width }">
                    <Group :height="height / 2" :width="width" display="flex" align-items="flex-end">
                      <Text
                        ref="textRef"
                        :text="getText(record)"
                        :font-size="13"
                        font-family="sans-serif"
                        stroke-style="red"
                        stroke-rect="50, 50, 100, 50"
                        :fill="row % 2 ? 'black' : 'red'"
                      />
                    </Group>
                  </template>
                </ListColumn>
                <ListColumn title="操作" width="200">
                  <template #customLayout="{ table, row, col, rect, record, height, width }">
                    <Group :height="height / 2" :width="width" display="flex" align-items="flex-end">
                      <Text
                        ref="textRef"
                        text="签收"
                        :font-size="13"
                        font-family="sans-serif"
                        stroke-style="red"
                        stroke-rect="50, 50, 100, 50"
                        :fill="row % 2 ? 'black' : 'red'"
                        @click.stop="handleClick(1)"
                      />
                      <Text
                        ref="textRef"
                        text="删除"
                        :font-size="13"
                        font-family="sans-serif"
                        stroke-style="red"
                        stroke-rect="50, 50, 100, 50"
                        :fill="row % 2 ? 'black' : 'red'"
                        @click.stop="handleClick(2)"
                      />
                    </Group>
                  </template>
                </ListColumn>
              </ListTable>
              <el-select
                v-if="selectShow"
                ref="selectRef"
                v-model="selectModelVal"
                class="edit-select"
                :style="{
                  height: '36px',
                  top: selectAttrs.top,
                  left: selectAttrs.left
                }"
                filterable
                placeholder=""
                @change="selectChange"
                @visible-change="selectVisibleChange"
              >
                <el-option v-for="item in 10" :key="item" :label="item" :value="item"> </el-option>
              </el-select>
              <el-tooltip effect="dark" content="没拿到原始数据哇" :visible="toolTipObj.visible" placement="top">
                <div
                  class="hover-div"
                  :style="{
                    height: '36px',
                    width: toolTipObj.width,
                    top: toolTipObj.top,
                    left: toolTipObj.left
                  }"
                ></div>
              </el-tooltip>
            </div>
          </template>
        </el-auto-resizer>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ListTable, ListColumn, Group, Image, Tag, Text } from '@visactor/vue-vtable'
const selectModelVal = ref('')
const selectRef = ref()
const selectShow = ref(false)

function generateRandomString(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
// 生成模拟数据的方法
const generatePersons = (count) => {
  return Array.from(new Array(count)).map((_, i) => {
    const first = generateRandomString(10)
    const last = generateRandomString(4)
    return {
      svg: i + 1,
      selectCol: i + 1,
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
  return val.selectCol || 'no data'
}
const records = ref([])

const listTableRef = ref(null)
const option = {
  enableLineBreak: true,
  autoWrapText: true,
  autoFillWidth: true,
  // limitMaxAutoWidth: 700,

  heightMode: 'autoHeight'
  // editCellTrigger: 'click'
  // keyboardOptions: {
  //   copySelected: true,
  //   pasteValueToCell: true,
  //   selectAllOnCtrlA: true
  // }
}
const selectCellInfo = ref({})
const selectAttrs = ref({
  top: 0,
  left: 0,
  width: 0,
  height: 0
})

/**
 * 单元格的点击事件
 * @param data
 */
function clickCell(data) {
  if (data.field === 'selectCol') {
    selectModelVal.value = data.dataValue
    console.log(selectModelVal.value, 'selectModelVal.value ')
    selectCellInfo.value = {
      field: data.field,
      originData: data.originData,
      row: data.row,
      col: data.col
    }
    selectAttrs.value.top = `${data.cellRange.top}px`
    selectAttrs.value.left = `${data.cellRange.left}px`
    selectAttrs.value.width = `${data.cellRange.width}px`
    selectShow.value = true
    setTimeout(() => {
      selectRef.value.focus()
      selectRef.value.toggleMenu()
    })
  }
}

function selectChange(val) {
  // changeCellValue 方法会重置列宽吗？
  // console
  listTableRef.value.vTableInstance.changeCellValue(selectCellInfo.value.col, selectCellInfo.value.row, val)
  selectShow.value = false
}
function selectVisibleChange(val) {
  if (!val) {
    selectShow.value = false
  }
}

function modifyCell(col, row) {
  listTableRef.value.vTableInstance.changeCellValue(col, row, Math.ceil(Math.random() * 100))
}

const toolTipObj = ref({
  top: 0,
  left: 0,
  width: 0,
  originData: {},
  row: 0,
  col: 0,
  visible: false
})
function mouseenterCell(data) {
  // 这里不是说跟click 的模型一样吗
  // 文档地址 https://visactor.io/vtable/api/events#MOUSEENTER_CELL
  toolTipObj.value.visible = false
  // console.log(data)
  nextTick(() => {
    if (data.col === 0) {
      console.log(data)

      toolTipObj.value = {
        top: `${data.cellRange.top}px`,
        left: `${data.cellRange.left}px`,
        width: `${data.cellRange.width}px`,
        originData: data.originData,
        row: data.row,
        col: data.col
      }
      toolTipObj.value.visible = true
    }
  })
}

function handleClick(val) {
  console.log(val)
}
onMounted(() => {
  records.value = generatePersons(30000)
  nextTick(() => {
    console.log(listTableRef.value.vTableInstance)
  })
})
</script>

<style scoped lang="scss">
.page-container {
  height: 100vh;
  width: 100vw;
  .v-table-content {
    position: relative;
  }
  .edit-select {
    position: absolute;
    top: 0;
    z-index: 100;
    --el-select-width: v-bind(selectAttrs.width);
    :deep(.el-select__wrapper) {
      min-height: 36px;
    }
  }
  .hover-div {
    position: absolute;
  }
}
</style>
