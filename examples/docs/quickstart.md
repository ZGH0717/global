## global-vue

一套基于 `Vue 2.0` 的移动端 `UI` 组件。

### 安装

```shell
npm i global-vue -S
```

### 引入组件

#### 完整引入

```javascript
import Vue from 'vue'
import global-vue from 'global-vue'
import 'global-vue/lib/global-css/index.css';

Vue.use(global-vue)
```

#### 部分引入

```javascript
import Vue from 'vue'
import {
  Cell
  // ...
} from 'global-vue'
import 'global-vue/lib/global-css/cell.css';

Vue.use(Cell)
```

#### 引入插件

**注：完整引入了iv，则无需再注册插件**

```javascript
import Vue from 'vue';
import {
  Alert,
  Toast
  // ...
} from 'global-vue';

Vue.prototype.$toast = Toast
Vue.prototype.$alert = Alert
```
