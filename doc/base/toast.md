# Toast 全局提示

全局展示操作反馈信息。

### 基本使用

:::demo 方法已绑定在`vm`上，直接调用即可
```vue
<template>
  <sp-button
    type="primary"
    @click="showInfo"
  >info</sp-button>
</template>

<script>
export default{
  methods: {
    showInfo() {
      this.$info('一个消息')
    }
  }
}
</script>
```
:::

### 四种状态

:::demo 分别有`success`, `warning`, `info`, `error`四种
```vue
<template>
  <sp-button
    @click="showSuccess"
  >success</sp-button>
  <sp-button
    @click="showWarning"
  >warning</sp-button>
  <sp-button
    @click="showInfo"
  >info</sp-button>
  <sp-button
    @click="showError"
  >error</sp-button>
</template>

<script>
export default{
  methods: {
    showSuccess() {
      this.$sparta.success('一个消息')
    },
    showWarning() {
      this.$sparta.warning('一个消息')
    },
    showInfo() {
      this.$sparta.info('一个消息')
    },
    showError() {
      this.$sparta.error('一个消息')
    }
  }
}
</script>
```
:::

<script>
export default{
  methods: {
    showSuccess() {
      this.$sparta.success('一个消息')
    },
    showWarning() {
      this.$sparta.warning('一个消息')
    },
    showInfo() {
      this.$sparta.info('一个消息')
    },
    showError() {
      this.$sparta.error('一个消息')
    },
    show() {
      this.$info({
        top: '15vh',
        message: '一个消息',
        duration: 5000
      })
    }
  }
}
</script>