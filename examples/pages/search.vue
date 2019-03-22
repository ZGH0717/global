<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox ">
      <div class="pt-20">
        <global-search
          v-model="value1"
          cls=" radius-35"
          v-on:click="searchHandle"
          placeholder="请输入内容"
        ></global-search>
      </div>
      <div class="pt-20">
        <global-search
          v-model="value2"
          cls=" radius-5"
          v-on:click="searchHandle"
          placeholder="请输入"
        ></global-search>
      </div>
      <div class="pt-20">
        <global-search
          v-model="value3"
          cls="radius-15"
          v-on:click="searchHandle"
          placeholder="请输入搜索"
        ></global-search>
      </div>
      <div class="pt-20">
        <global-search
          v-model="value4"
          v-on:click="searchHandle"
          placeholder="请输入兑换码"
        ></global-search>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: ""
    };
  },
  methods: {
    searchHandle(val) {
      this.$alert({
        message: `输入的值为：${val}`,
        onConfirm: () => {
          this.$alert.close();
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
