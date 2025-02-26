<template>
  <ClientOnly>
    <div style="height: 100vh">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2 :columns="columns" :data="data" :width="width" :height="height" :row-height="37" />
        </template>
      </el-auto-resizer>
    </div>
  </ClientOnly>
</template>

<script lang="tsx" setup>
const generateColumns = (length = 20, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    // ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    // width: 100,
    width: 0,
    minWidth: 150,
    cellRenderer: ({ rowIndex, rowData }) => <div>11111</div>
  }))

const generateData = (columns: ReturnType<typeof generateColumns>, length = 200, prefix = 'row-') =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null
      }
    )
  })

const columns = ref(generateColumns(20))
console.log(columns.value)
const data = []
</script>

<style lang="scss">
.el-table-v2 {
  // overflow-x: auto;
}
.el-table-v2__header-row {
  // display: grid;
  // grid-template-columns: repeat(20, 1fr);
}
.el-table-v2__row {
  // display: grid;
  // grid-template-columns: repeat(20, 1fr);
  .el-table-v2__row-cell {
    // overflow: hidden;
    // min-width: 300px;
  }
}
</style>
