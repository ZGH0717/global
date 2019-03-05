### Loading

### 使用指南
```html
import { Loading } from 'iv';
Vue.use(Loading);

```
### 基本用法
配合Button组件 一起使用
```html
<i-loading :size="40" color="#db2227"></i-loading>

```
### 居中用法
```html

<i-loading position="center" class="absoluteCC" color="#db2227"></i-loading>

```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color  | loading颜色    | String   |    |   #fff |
| size  | 大小    | String   | 1-10000 |   40 |
| position  | 位置    | String   | center |    |
