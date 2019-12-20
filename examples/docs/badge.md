### Badge

### 使用指南
```html
import { Badge } from 'hua-ui';

Vue.use(Badge);

```
### 基本用法
其父元素div  position属性必须为relative 或者 absolute

```html
<hua-badge is-dot>
  <hua-button size="btn-lg" class="relative">
    消息
  </hua-button>
</hua-badge>


<hua-badge value="10">
  <hua-button size="btn-lg" class="relative">
    消息
  </hua-button>
</hua-badge>

```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value  | 提示内容    | Number String   | — | - |
| is-dot  | 小圆点    | Boolean   | — | false |
| max  | 	最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | Number   | — | 99 |
