<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox">
      <hua-cell>
        普通弹出提示
        <hua-button size="btn-lg" type="btn-primary" v-on:click="showAlert"
          >提示</hua-button
        >
      </hua-cell>
      <hua-cell>
        调用点击确认后触发函数
        <hua-button size="btn-lg" type="btn-primary" v-on:click="showAlert1"
          >提示</hua-button
        >
      </hua-cell>
    </div>
  </div>
</template>

<script>
import ICell from '../../packages/Cell/main'

export default {
  components: { ICell },
  name: 'alert-md',
  data () {
    return {
      n: 1
    }
  },
  mounted () {
    console.log(this.$route)
  },
  methods: {
    showAlert () {
      this.$alert('普通弹出提示')
    },
    showAlert1 () {
      this.$alert({
        message: `点了${this.n}次`,
        onConfirm: () => {
          this.n++
          console.log(this.n)
          this.$alert.close()
        },
        onHide: () => {
          console.log('关闭时触发')
        }
      })
    }
  }
}
</script>
