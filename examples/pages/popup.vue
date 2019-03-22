<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox text-center ">
      <div class="pd-5"></div>
      <div class="pd-15">
        <global-button size="btn-sm" v-on:click="active = !active"
          >默认弹出</global-button
        >
      </div>
      <div class="pd-15">
        <global-button size="btn-sm" v-on:click="active2 = !active2"
          >底部弹出普通类型</global-button
        >
      </div>
      <div class="pd-15">
        <global-button size="btn-sm" v-on:click="active3 = !active3"
          >底部弹出安卓类型</global-button
        >
      </div>
      <div class="pd-15">
        <global-button size="btn-sm" v-on:click="active4 = !active4"
          >顶部弹出</global-button
        >
      </div>
      <global-popup v-model="active">
        <div>
          <p v-for="i in 3" :key="i">内容内容呢</p>
        </div>
      </global-popup>
      <global-popup v-model="active2" position="bottom">
        <div class="bg-f text-center">
          <global-cell v-on:click="showAlert('微信')">
            微信
          </global-cell>
          <global-cell v-on:click="showAlert('支付宝')">
            支付宝
          </global-cell>
          <global-cell v-on:click="showAlert('取消')">
            取消
          </global-cell>
        </div>
      </global-popup>
      <global-popup
        v-model="active3"
        position="bottom"
        class="global-popup-actionsheet"
      >
        <div class="bg-f radius-5 text-center overflow-hidden mb-10">
          <global-cell v-on:click="showAlert('微信')">
            微信
          </global-cell>
          <global-cell v-on:click="showAlert('支付宝')">
            支付宝
          </global-cell>
        </div>
        <div class="radius-5 overflow-hidden mb-10">
          <global-cell v-on:click="showAlert('取消')">
            取消
          </global-cell>
        </div>
      </global-popup>
      <global-popup v-model="active4" position="top">
        <div class="bg-f  text-center overflow-hidden mb-10">
          <global-cell v-on:click="showAlert('取消')">
            弹出成功
          </global-cell>
        </div>
      </global-popup>
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
