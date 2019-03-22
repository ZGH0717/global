<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top"></div>
    <global-chat-foot v-on:sendHandle="onSend"></global-chat-foot>
  </div>
</template>

<script>
export default {
  name: "chat-foot",
  methods: {
    onSend(val) {
      this.$alert.show(`发送内容为${val}`);
    }
  }
};
</script>

<style scoped></style>
