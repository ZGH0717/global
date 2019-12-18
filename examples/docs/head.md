### Head

### 使用指南
```html
import { Head } from 'hua-ui';
Vue.use(Head);

```
### 基本用法 slot插槽
```html
<hua-head :is-back="false" class="middle-box">
  <button class="iconL color-f" slot="iconL">iconL</button>
  <div slot="title" class="middle color-f">title</div>
  <button class="iconR color-f" slot="iconR">iconR</button>
</hua-head>
```
### 和Search组件一起使用
```html
<template>
<hua-head class="middle-box" :is-back="false">
   <hua-search class="middle" slot="title" v-model="searchval" cls="radius34" v-on:click="searchHandle" placeholder="请输入内容">
   </hua-search>
</hua-head>
</template>
<script>
  export default {
    data() {
      return {
        searchval: ''
      }
    },
    methods: {
      searchHandle() {
        console.log(this.searchval)
      }
    }
  }
</script>
```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title  | loading颜色    | String   |    |   #fff |
| is-back  | 是否显示返回按钮    | Boolean   | |   true|
| slot  | 插槽    | String   | iconL/title/iconR |    |
