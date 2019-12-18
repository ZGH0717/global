<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox">
      <hua-button class="mt-10">
        加载中 <hua-loading color="#db2227" size="14"></hua-loading>
      </hua-button>
      <hua-button class="mt-10" type="btn-success" size="btn-sm">
        加载中 <hua-loading color="#fff" size="24"></hua-loading>
      </hua-button>
      <hua-loading
        position="center"
        class="absoluteCC"
        color="#db2227"
      ></hua-loading>
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
