### Countdown

### 使用指南
```html
import { Countdown } from 'global-vue';
Vue.use(Countdown);

```
### 基本用法
```html
 <global-countdown :remain-time="50000"></global-countdown>
```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| remain-time | 传入总秒数，必须大于0    | Number   |    |   100000 |
