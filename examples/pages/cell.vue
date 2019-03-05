<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox ">
      <i-cell>
        <i class="iconfont middle fs18 color-red">&#xe715;</i>
        内容
      </i-cell>
      <i-cell is-arrow>
        <i class="iconfont middle fs18" style="color: blue ;">&#xe696;</i>
        内容
      </i-cell>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>
<style>
  .btn1 {
    box-shadow: inset 0 0px 1000px rgba(0, 0, 0, .125);
  }
</style>
