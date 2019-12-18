### Avatar

### 使用指南
```html
import { Avatar } from 'hua-ui';

Vue.use(Avatar);

```
### 基本用法
```html
<hua-Avatar :image="image" />

```
### 圆角 is-circle false
```html
<hua-Avatar :image="image" :is-circle="false" />

```
###  size 宽高相同
```html
<hua-Avatar :image="image" size="100px" />

```
### 宽高单独设置 width height
```html
<hua-Avatar
  :image="image"
  :is-circle="false"
  width="200px"
  height="100px"
/>

```
### 倒角 设置
```html
<hua-Avatar :image="image" radius="10" />

```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| image  | 图片地址    | String   | — |  '' |
| isCircle  | 是否为圆形    | Boolean   | — |  true |
| radius  | 圆角值    | String ,Number  | — |  0 |
| size  | 大小    | String ,Number   | — |  40 |
| width  | 宽度    | String ,Number   | — |  '' |
| height  | 高度    | String ,Number   | — |  '' |
