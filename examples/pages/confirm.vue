<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox">
      <!------------强大的分割线-------------->
      <button class="common-btn mg20" @click="showConfirm1">Confirm</button>
      <button class="common-btn mg20" @click="showConfirm">Confirm 弹出input</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        n: 0,
        nickname: '执法大队',
      }
    },
    computed: {},
    mounted() {
    },
    methods: {
      showConfirm() {
        this.$confirm({
          message: '修改昵称',
          content: this.nickname,
          isInput: true,
          onConfirm: (confirm) => {
            this.nickname = confirm.content
            console.log(this.nickname)
          },
          onCancel: () => {
            this.$confirm.close()
            console.log('点击取消触发')
          }
        })
      },

      showConfirm1() {
        this.$confirm({
          message: '普通弹出提示',
          onConfirm: (confirm) => {
            console.log(confirm)
          },
          onCancel: () => {
            this.$confirm.close()
            console.log('点击取消触发')
          }
        })
      }
    }
  }
</script>
