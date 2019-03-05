### Head

### 使用指南
```html
import { Head } from 'iv';
Vue.use(Head);

```
### 基本用法 slot插槽
```html
<i-head :is-back="false" class="middle_before">
  <button class="iconL colorf" slot="iconL">iconL</button>
  <div slot="title" class="middle colorf">title</div>
  <button class="iconR colorf" slot="iconR">iconR</button>
</i-head>
```
### 和Search组件一起使用
```html
<template>
<i-head class="middle_before" :is-back="false">
   <i-search class="middle" slot="title" v-model="searchval" cls="radius34" v-on:click="searchHandle" placeholder="请输入内容">
   </i-search>
</i-head>
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
