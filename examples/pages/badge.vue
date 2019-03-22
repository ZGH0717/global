<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox text-center ">
      <br />
      <global-button size="btn-lg" class="relative">
        消息
        <global-badge :count="10" top="2" right="2"></global-badge>
      </global-button>
      <br />
      <br />
      <global-button size="btn-lg" class="relative">
        消息
        <global-badge top="8" right="10"></global-badge>
      </global-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert-md",
  data() {
    return {
      taggleActive: false
    };
  },
  methods: {
    showAlert() {
      this.$alert.show({
        message: `点了${this.n}次`,
        onShow: () => {
          console.log(this);
          this.n++;
        },
        onHide: () => {
          this.$alert.close();
        }
      });
    }
  }
};
</script>
<style>
.btn1 {
  box-shadow: inset 0 0px 1000px rgba(0, 0, 0, 0.125);
}
</style>
