### Badge

### 使用指南
```html
import { Badge } from 'iv';

Vue.use(Badge);

```
### 基本用法
其父元素div  position属性必须为relative 或者 absolute

```html
<div stype="position:relative">
  消息
  <i-badge :count="10" top="2" right="2"></i-badge>
</div>
<div stype="position:relative">
  消息
  <i-badge top="8" right="10"></i-badge>
</div>

```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| count  | 提示数量    | Number   | — | 0 |
| top  | 距离框内顶部距离    | String   | — | 0 |
| right  | 距离框内右侧距离    | String   | — | 0 |