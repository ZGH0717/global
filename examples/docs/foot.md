### Foot

### 使用指南
```html
import { Foot } from 'iv';
Vue.use(Foot);

```
### 默认类型
```html
<template>
    <i-foot :menus="menus1"></i-foot>
</template>
<script>
  export default {
    name: "foot",
    data() {
      return {
        menus1: [{
          to: '',
          name: '推荐',
          iconfont: '&#xe756;',
        }, {
          to: '#',
          name: '分类',
          iconfont: '&#xe696;',

        }, {
          to: '#2',
          name: '购物车',
          iconfont: '&#xe698;',

        }, {
          to: '#3',
          name: '我的',
          iconfont: '&#xe6b8;',
        }]
      }
    }
  }
</script>
```
### type1类型
```html
<template>
    <i-foot type="type1"  :menus="menus"></i-foot>
</template>
<script>
  export default {
    name: "foot",
    data() {
      return {
        menus: [{
          to: '',
          name: '推荐',
          iconfont: '&#xe756;',
        }, {
          to: '#',
          name: '分类',
          iconfont: '&#xe696;',

        }, {
          to: '#1',
          name: '活动',
          iconfont: '&#xe6db;',
          middleImg: 'http://....'
        }, {
          to: '#2',
          name: '购物车',
          iconfont: '&#xe698;',

        }, {
          to: '#3',
          name: '我的',
          iconfont: '&#xe6b8;',
        }]
      }
    }
  }
</script>
```
### type2类型
```html
<template>
    <i-foot type="type2"  :menus="menus"></i-foot>
</template>
<script>
  export default {
    name: "foot",
    data() {
      return {
        menus: [{
          to: '',
          name: '推荐',
          iconfont: '&#xe756;',
        }, {
          to: '#',
          name: '分类',
          iconfont: '&#xe696;',

        }, {
          to: '#1',
          name: '活动',
          iconfont: '&#xe6db;',
          middleImg: 'http://....'
        }, {
          to: '#2',
          name: '购物车',
          iconfont: '&#xe698;',

        }, {
          to: '#3',
          name: '我的',
          iconfont: '&#xe6b8;',
        }]
      }
    }
  }
</script>
```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | 类型    | String   |  type1/type2  |   |  ''|
| menus  | 菜单    | Array   |    |   ||

### 参数menus包含字段说明
```html
    to: '', //跳转的路由path
    name: '推荐',// 展示的文字
    iconfont: '&#xe756;', //展示的字体图标
    middleImg:'' 最中间展示的图片（该字段只有在需要的时候）

```
