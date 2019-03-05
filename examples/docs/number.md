### Number

### 使用指南
```html
import { Number } from 'iv';
Vue.use(Number);

```
### 基本用法
```html
  <i-number v-model="num2" :max="10" :min="1" :step="2"></i-number>
```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model  | 绑定的值    | Number   |    |   1 |
| max  | 允许的最大值    | Number   | |   100|
| slot  | 允许的最小值    | Number   |  |   100 |
| step  | 步长    | Number   |  |   1 |
