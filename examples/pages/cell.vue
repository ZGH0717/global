<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox ">
      <global-cell>
        <i class="iconfont middle fs-18 color-red">&#xe715;</i>
        内容
      </global-cell>
      <global-cell is-arrow>
        <i class="iconfont middle fs-18" style="color: blue ;">&#xe696;</i>
        内容
      </global-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.btn1 {
  box-shadow: inset 0 0px 1000px rgba(0, 0, 0, 0.125);
}
</style>
