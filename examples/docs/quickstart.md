## iv

一套基于 `Vue 2.0` 的移动端 `UI` 组件。

### 安装

```shell
npm i iv -S
```

### 引入组件

#### 完整引入

```javascript
import Vue from 'vue'
import iv from 'iv'
import 'iv/lib/iv-css/index.css';

Vue.use(iv)
```

#### 部分引入

```javascript
import Vue from 'vue'
import {
  Cell
  // ...
} from 'iv'
import 'iv/lib/iv-css/cell.css';

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
} from 'iv';

Vue.prototype.$toast = Toast
Vue.prototype.$alert = Alert
```
