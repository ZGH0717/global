### Confirm

### 使用指南
```html
import { Confirm } from 'hua-ui';
Vue.prototype.$confirm = Confirm

```
### 显示Confirm

```html

<script>
  export default {
    data() {
      return {
        nickname: '执法大队'
      }
    },
    computed: {},
    mounted() {
      this.$confirm('普通弹出提示');

      this.$confirm({
        message: '修改昵称',
        content: this.nickname,
        isInput: true,
        onConfirm: (confirm) => {
          this.nickname = confirm.content
          console.log(this.nickname)
        },
        onCancel: () => {
           console.log('点击取消触发')
        }
      })
    }
  }
</script>
```

### 关闭Confirm
```html
this.$confirm.close()

```
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| message  | 提示内容    | string   | — | — |
| isMaskClick  | 点击遮罩是否关闭弹窗    | Boolean   | — | — |
| isInput  |   是否有input  | Boolean   | — | false |
| content  | input里面的内容    | Boolean   | — | — |
| onConfirm  | 点击确认时触发    | Function   | — | — |
| onCancel  | 点击取消触发    | Function   | — | — |

