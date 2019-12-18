### Toast

### 使用指南
```html
import { Toast } from 'hua-ui';
Vue.prototype.$toast = Toast

```
### 普通弹出提示

```html
this.$toast('普通弹出提示');
```
### 关闭toast
```html
this.$toast.close()

```
###  loading提示

```html
  默认
  this.$toast.loading('加载中...');

  设置loading颜色
  this.$toast.loading({
   message:'加载中...',
   color:'#fff'
  });


```
###   success提示

```html
this.$toast.success('支付成功');
```
###   fail提示

```html
 this.$toast.fail('支付失败');
```
###   warning提示

```html
this.$toast.warning('操作有误');
```

### Attributes

