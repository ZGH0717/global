### Loading

### 使用指南
```html
import { Loading } from 'hua-ui';
Vue.use(Loading);

```
### 基本用法
配合Button组件 一起使用
```html
<hua-loading :size="40" color="#db2227"></hua-loading>

```
### 居中用法
```html

<hua-loading position="center" class="absoluteCC" color="#db2227"></hua-loading>

```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color  | loading颜色    | String   |    |   #fff |
| size  | 大小    | String   | 1-10000 |   40 |
| position  | 位置    | String   | center |    |
