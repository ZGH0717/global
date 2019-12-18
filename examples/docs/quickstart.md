## hua-ui

一套基于 `Vue 2.0` 的移动端 `UI` 组件。

### 安装

```shell
npm i hua-ui -S
```

### 引入组件

#### 完整引入

```javascript
import Vue from 'vue'
import hua-ui from 'hua-ui'
import 'hua-ui/lib/hua-css/index.css';

Vue.use(hua-ui)
```

#### 部分引入

```javascript
import Vue from 'vue'
import {
  Cell
  // ...
} from 'hua-ui'
import 'hua-ui/lib/hua-css/cell.css';

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
} from 'hua-ui';

Vue.prototype.$toast = Toast
Vue.prototype.$alert = Alert
```
