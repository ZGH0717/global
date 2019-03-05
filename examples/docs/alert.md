### Alert

### 使用指南
```html
import { Alert } from 'iv';
Vue.prototype.$alert = Alert

```
### 显示Alert

```html

this.$alert('普通弹出提示');

this.$alert({
  message: `提示内容`,
  onConfirm: () => {
    this.$alert.close()
  },
  onHide: () => {
    console.log('关闭时触发')
  }
})
```
### 关闭Alert
```html
this.$alert.close()

```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| message  | 提示内容    | string   | — | — |
| isMaskClick  | 点击遮罩是否关闭弹窗    | Boolean   | — | — |
| onConfirm  | 点击确认时触发    | Function   | — | — |
| onShow  | 显示时触发    | Function   | — | — |

