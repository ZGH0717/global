##Radio

### 使用指南
```html
import { Radio } from 'hua-ui';
Vue.use(Radio);

```
### 基本用法

```html
<template>
  <hua-radio v-model="selectValue" :list="list" key-name="city" value-name="id" type="button" iconfont="&#xe756;">
  </hua-radio>
  <hua-radio v-model="selectValue" :list="list" key-name="city" value-name="id" type="cell" iconfont="&#xe756;">
  </hua-radio>
</template>

<script>
  export default {
    data() {
      return {
        selectValue: [{
          id: 1,
          city: '厦门'
        }],
        list: [{
          id: 1,
          city: '厦门'
        }, {
          id: 2,
          city: '广州'
        }, {
          id: 3,
          city: '深圳'
        }, {
          id: 4,
          city: '上海'
        }, {
          id: 5,
          city: '北京'
        }, {
          id: 6,
          city: '杭州'
        }, {
          id: 7,
          city: '武汉'
        }, {
          id: 8,
          city: '南京'
        }, {
          id: 9,
          city: '西安'
        }]
      }
    }
  }
</script>
```

### Attributes

| 参数      | 说明          | 类型      | 可选值       | 默认值   |
|---------- |--------     |---------- |-------------|-------- |
| v-model   | 绑定当前选择的值 | Object   | —          | —       |
| list      | 可选列表      | Array    | —         |       — |
| type      | 展示类型      | String   | button/cell |    button  |
| key-name  | 每个可选项的键名称 | String    | —       |   name |
| value-name | 每个可选项的值名称    | String   | —    |  value |
| iconfont | 展示的字体图标值    | String   | —    |   |

