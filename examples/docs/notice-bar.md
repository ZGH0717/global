### NoticeBar

### 使用指南
```html
import { NoticeBar } from 'global-vue';

Vue.use(NoticeBar);

```
### 无插槽 速度根据内容自适应
```html
  <global-notice-bar content="无icon"></global-notice-bar>
```

### 有左插槽（icon） 速度5
```html
  <global-notice-bar :seed="5" content="有左icon">
    <i class="iconfont" slot="iconL">&#xe756;</i>
  </global-notice-bar>
```

### 有右插槽（icon） 速度10
```html
  <global-notice-bar :seed="10" content="有右icon">
    <i class="iconfont" slot="iconR">&#xe6a7;</i>
  </global-notice-bar>
```

### 有左右插槽（icon） 速度15
```html
  <global-notice-bar :seed="15" content="有左右icon">
    <i class="iconfont" slot="iconL">&#xe756;</i>
    <i class="iconfont" slot="iconR">&#xe6a7;</i>
  </global-notice-bar>
```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| content  | 内容文字    | String   | — |   |
| seed  | 运动速度    | Number   | 1-50 |  0 |
| slot  | 插槽    | String   | iconL/iconR |   |
