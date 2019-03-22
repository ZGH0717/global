<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox text-center ">
      <div class="pd-15">
        <global-button size="btn-lg" v-on:click="click1"
          >文字提示</global-button
        >
      </div>
      <div class="pd-15">
        <global-button size="btn-lg" v-on:click="click2"
          >loading提示</global-button
        >
      </div>
      <div class="pd-15">
        <global-button size="btn-lg" v-on:click="click3"
          >成功提示</global-button
        >
      </div>
      <div class="pd-15">
        <global-button size="btn-lg" v-on:click="click4"
          >失败提示</global-button
        >
      </div>
      <div class="pd-15">
        <global-button size="btn-lg" v-on:click="click5"
          >警告提示</global-button
        >
      </div>
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
    click1() {
      this.$toast("更新成功");
    },
    click2() {
      this.$toast.loading("加载中...");
      setTimeout(() => this.$toast.close(), 3000);
    },
    click3() {
      this.$toast.success("支付成功");
      setTimeout(() => this.$toast.close(), 3000);
    },
    click4() {
      this.$toast.fail("支付失败");
      setTimeout(() => this.$toast.close(), 3000);
    },
    click5() {
      this.$toast.warning("操作有误");
      setTimeout(() => this.$toast.close(), 3000);
    }
  }
};
</script>
