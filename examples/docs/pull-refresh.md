### PullRefresh

### 使用指南
```html
import { PullRefresh } from 'global-vue';
Vue.use(PullRefresh)

```
### 基本用法

```html
<template>
  <global-pull-refresh v-model="loading" v-on:refresh="update" v-on:load="loadMore">
    内容。。。。。
  </global-pull-refresh>
</template>
<script>
  export default {
    data() {
      return {
        loading:false,
        refreshNum:0,
        length:15
      }
    },
    methods: {
      update(){
        setTimeout(()=>{
          this.loading=false
          this.refreshNum++
          this.length=15
        },3000)
      },
      loadMore(){
        setTimeout(()=>{
          this.loading=false
          this.length+=10
        },2000)
      }
    }
  }
</script>
```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model  | 绑定是否正在加载数据    | Boolean   | true/false | false |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| refresh  | 上拉刷新    | 自定义 |
| loadMore  | 滚到底部加载更多数据    | 自定义 |

