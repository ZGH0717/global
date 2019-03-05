### Collapse

### 使用指南
```html
import { Collapse } from 'iv';
Vue.use(Collapse);

```
### 基本用法
```html
<i-collapse v-for="i in 4" :key="i">
  <span slot="title">
    订单提交后能否取消订单或修改信息？
  </span>
  <div slot="content">
    下单支付后，订单提交至海关申报及纳税，客户将不能修改订单信息（收货地址、电话等），也不能取消订单，请知晓并谅解。
  </div>
</i-collapse>
```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| slot  | 内容插槽    | String   | title/content |   |
