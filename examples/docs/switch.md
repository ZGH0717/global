### Switch

### 使用指南
```html
import { Switch } from 'hua-ui';

Vue.use(Switch);

```
### 基本用法
```html
<template>
  <hua-switch class="pd15" v-model="taggleActive" v-on:click="clickHandle">
    开启夜间模式
  </hua-switch>
</template>

<script>
  export default {
    name:'switch-md',
    data() {
      return {
        taggleActive: false
      }
    },
    methods: {
      clickHandle() {
        this.$confirm({
          message: `是否${this.taggleActive?'关闭':'开启'}夜间模式？`,
          onConfirm: () => {
            this.taggleActive = !this.taggleActive
            this.$confirm.close()
          },
          onCancel:()=>{
            this.$confirm.close()
          }
        })
      }
    }
  }
</script>
```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model  | 是否开启    | Boolean   | — |  false |


### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 点击操作    | — |
