### Search

### 使用指南
```html
import { Search } from 'global-vue';

Vue.use(Search);

```
### 基本用法
```html
 <global-search v-model="value1" cls="radius34" v-on:click="searchHandle" placeholder="请输入内容"></global-search>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model  | 绑定输入框内的值    | String   | — |  '' |
| placeholder  | 输入框placeholder值    | String   | — |  搜索 |
| cls  | 给输入框新增class(绑定class设置圆角)    | String   | — |   |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 按回车时，调用的方法    |  -- |
