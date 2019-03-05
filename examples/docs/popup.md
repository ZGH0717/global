### Popup

### 使用指南
```html
import { Popup } from 'iv';
Vue.use(Popup)

```
### 默认弹出

```html
  <i-popup v-model="active">
    内容内容呢
  </i-popup>
```
### 弹出位置

```html
<template>
  <i-popup v-model="active2" position="bottom">
    <div class="bgf textC">
      <i-cell v-on:click="showAlert('微信')">
        微信
      </i-cell>
      <i-cell v-on:click="showAlert('支付宝')">
        支付宝
      </i-cell>
      <i-cell v-on:click="showAlert('取消')">
        取消
      </i-cell>
    </div>
  </i-popup>
</template>
<script>
  export default {
    data() {
      return {
        active2: false
      }
    },
    methods: {
      showAlert(val) {
        this.$alert({
          message: `选择的是${val}`,
          onConfirm: () => {
            this.active2 = false
            this.$alert.close();
          },
          onHide: () => {
          }
        })
      }
    }
  }
</script>
```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model  | 绑定是否弹出    | Boolean   | true/false | false |
| position  |  Popup 位置  | String   | bottom/top | ''（默认中间弹出） |

### 关闭Alert
```html
this.$alert.close()

```
