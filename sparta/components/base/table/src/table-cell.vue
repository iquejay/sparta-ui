<script>
export default {
  name: 'SpTableCell',

  props: {
    column: {
      type: Object,
      default: null
    },
    list: {
      type: Array,
      default: () => []
    },
    rIndex: {
      type: Number,
      default: 0
    },
    cIndex: {
      type: Number,
      default: 0
    }
  },
  render(h) {
    // 单元格里面的内容
    const row = this.list[this.rIndex]
    let cell = this.column.componentOptions.propsData.prop ? row[this.column.componentOptions.propsData.prop] : row
    let cellCopy = cell === undefined ? undefined : JSON.parse(JSON.stringify(cell))
    const itemVNode = this.$parent.children[this.cIndex]
    const cellData = itemVNode.data
    const propsData = itemVNode.componentOptions.propsData
    const formatter = propsData.formatter
    if (this.column.componentOptions.children) {
      // 如果有children，说明不是用prop或者slot-scope的，直接渲染即可
      cellCopy = this.column.componentOptions.children
    } else if(cellData.scopedSlots) {
      // 如果单元格中是template，则直接显示
      cellCopy = cellData.scopedSlots.default({
        cell: cellCopy,
        row: row,
        index: this.rIndex
      })
    } else if(cellCopy !== undefined && cellCopy !== null && formatter) {
      // 否则，如果cell中不为undefined，null且formatter有值
      // 则用formatter格式化数据
      cellCopy = formatter(cellCopy, row)
    } else if(cellCopy === undefined || cellCopy === null) {
      // 否则，显示cellEmptyText
      cellCopy = this.$parent.cellEmptyText
    }
    // ellipsis
    let cellClass = 'sp-table-cell'
    if (propsData.ellipsis) {
      cellClass += ' ellipsis'
    }
    // 宽度
    let cellWidth = propsData.width
    // 如果转换后是一个number，则加'px'后缀
    if (!isNaN(+cellWidth)) {
      // 有纵向边框，宽度-1
      if(this.$parent.$attrs.border) {
        cellWidth = +cellWidth - 1
      }
      cellWidth += 'px'
    }
    
    // 渲染
    return h('div',
      {
        class: cellClass,
        attrs: {
          style: `width: ${cellWidth}`,
          title: propsData.ellipsis ? cellCopy : undefined
        }
      },
      cellCopy
    )
  }
}
</script>
