<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox text-center ">
      <div class="pd-5"></div>
      <div class="pd-15">
        <hua-button size="btn-sm" v-on:click="active = !active"
          >默认弹出</hua-button
        >
      </div>
      <div class="pd-15">
        <hua-button size="btn-sm" v-on:click="active2 = !active2"
          >底部弹出普通类型</hua-button
        >
      </div>
      <div class="pd-15">
        <hua-button size="btn-sm" v-on:click="active3 = !active3"
          >底部弹出安卓类型</hua-button
        >
      </div>
      <div class="pd-15">
        <hua-button size="btn-sm" v-on:click="active4 = !active4"
          >顶部弹出</hua-button
        >
      </div>
      <hua-popup v-model="active">
        <div>
          <p v-for="i in 3" :key="i">内容内容呢</p>
        </div>
      </hua-popup>
      <hua-popup v-model="active2" position="bottom">
        <div class="bg-f text-center">
          <hua-cell v-on:click="showAlert('微信')">
            微信
          </hua-cell>
          <hua-cell v-on:click="showAlert('支付宝')">
            支付宝
          </hua-cell>
          <hua-cell v-on:click="showAlert('取消')">
            取消
          </hua-cell>
        </div>
      </hua-popup>
      <hua-popup
        v-model="active3"
        position="bottom"
        class="hua-popup-actionsheet"
      >
        <div class="bg-f radius-5 text-center overflow-hidden mb-10">
          <hua-cell v-on:click="showAlert('微信')">
            微信
          </hua-cell>
          <hua-cell v-on:click="showAlert('支付宝')">
            支付宝
          </hua-cell>
        </div>
        <div class="radius-5 overflow-hidden mb-10">
          <hua-cell v-on:click="showAlert('取消')">
            取消
          </hua-cell>
        </div>
      </hua-popup>
      <hua-popup v-model="active4" position="top">
        <div class="bg-f  text-center overflow-hidden mb-10">
          <hua-cell v-on:click="showAlert('取消')">
            弹出成功
          </hua-cell>
        </div>
      </hua-popup>
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
    };
  },
  methods: {
    showAlert(val) {
      this.$alert({
        message: `选择的是${val}`,
        onConfirm: () => {
          this.active2 = false;
          this.active3 = false;
          this.$alert.close();
        },
        onHide: () => {}
      });
    }
  }
};
</script>
