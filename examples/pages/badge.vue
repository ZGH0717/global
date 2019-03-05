<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox textC ">
      <br>
      <i-button size="btn-lg" class="relative">
        消息
        <i-badge :count="10" top="2" right="2"></i-badge>
      </i-button>
      <br>
      <br>
      <i-button size="btn-lg" class="relative">
        消息
        <i-badge top="8" right="10"></i-badge>
      </i-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'alert-md',
    data() {
      return {
        taggleActive: false
      }
    },
    methods: {
      showAlert() {
        this.$alert.show({
          message: `点了${this.n}次`,
          onShow: () => {
            console.log(this)
            this.n++
          },
          onHide: () => {
            this.$alert.close()
          }
        })
      }
    }
  }
</script>
<style>
  .btn1{
    box-shadow:inset 0 0px 1000px rgba(0,0,0,.125);
  }
</style>
