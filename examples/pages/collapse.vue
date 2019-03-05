<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox textC ">
      <i-collapse v-for="i in 4" :key="i">
        <span slot="title">
          订单提交后能否取消订单或修改信息？
        </span>
        <div slot="content" class="bgf pd15 fs12 color3">
          下单支付后，订单提交至海关申报及纳税，客户将不能修改订单信息（收货地址、电话等），也不能取消订单，请知晓并谅解。
        </div>
      </i-collapse>
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
