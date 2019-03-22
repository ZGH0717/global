<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox">
      <global-button class="mt-10">
        加载中 <global-loading color="#db2227" size="14"></global-loading>
      </global-button>
      <global-button class="mt-10" type="btn-success" size="btn-sm">
        加载中 <global-loading color="#fff" size="24"></global-loading>
      </global-button>
      <global-loading
        position="center"
        class="absoluteCC"
        color="#db2227"
      ></global-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {};
  },
  methods: {}
};
</script>
