### Dropdown

### 使用指南
```html
import { Dropdown } from 'global-vue';

Vue.use(Dropdown);

```
### 基本用法
```html
<global-dropdown
  ref="globalDropdown"
  class="middle ml-15 user-box"
  trigger="click"
  placement="bottom-left"
>
  <span slot="selectVal" class="middle common-cursor"></span>
  <div>
    content
  </div>
</global-dropdown>

```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger  | 触发方式    |   String  | hover / click |  'click' |
| placement  | 位置    | String   | bottom-left / bottom-right|  'bottom-left' |
```
### Slot

| 参数      | 说明     |
|---------- |-------- |
|dropdown-head | 下拉的头 |
