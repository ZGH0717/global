<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox textC ">
      <div class="pd5"></div>
      <div class="pd15">
        <i-button size="btn-sm" v-on:click="active=!active">默认弹出</i-button>
      </div>
      <div class="pd15">
        <i-button size="btn-sm" v-on:click="active2=!active2">底部弹出普通类型</i-button>
      </div>
      <div class="pd15">
        <i-button size="btn-sm" v-on:click="active3=!active3">底部弹出安卓类型</i-button>
      </div>
      <div class="pd15">
        <i-button size="btn-sm" v-on:click="active4=!active4">顶部弹出</i-button>
      </div>
      <i-popup v-model="active">
        <div>
          <p v-for="i in 3">内容内容呢</p>
        </div>
      </i-popup>
      <i-popup v-model="active2" position="bottom">
        <div class="bgf textC">
          <i-cell v-on:click="showAlert('微信')">
            微信
          </i-cell>
          <i-cell v-on:click="showAlert('支付宝')">
            支付宝
          </i-cell>
          <i-cell v-on:click="showAlert('取消')">
            取消
          </i-cell>
        </div>
      </i-popup>
      <i-popup v-model="active3" position="bottom" class="iv-popup-actionsheet">
        <div class="bgf radius5 textC over-hidden mgB10">
          <i-cell v-on:click="showAlert('微信')">
            微信
          </i-cell>
          <i-cell v-on:click="showAlert('支付宝')">
            支付宝
          </i-cell>
        </div>
        <div class="radius5 over-hidden mgB10">
          <i-cell v-on:click="showAlert('取消')">
            取消
          </i-cell>
        </div>

      </i-popup>
      <i-popup v-model="active4" position="top">
        <div class="bgf  textC over-hidden mgB10">
          <i-cell v-on:click="showAlert('取消')">
            弹出成功
          </i-cell>
        </div>

      </i-popup>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: false,
        active2: false,
        active3: false,
        active4: false
      }
    },
    methods: {
      showAlert(val) {
        this.$alert({
          message: `选择的是${val}`,
          onConfirm: () => {
            this.active2 = false
            this.active3 = false
            this.$alert.close();
          },
          onHide: () => {
          }
        })
      }
    }
  }
</script>

