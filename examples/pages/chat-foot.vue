<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top"></div>
    <hua-chat-foot v-on:sendHandle="onSend"></hua-chat-foot>
  </div>
</template>

<script>
export default {
  name: 'chat-foot',
  methods: {
    onSend (val) {
      this.$alert(`发送内容为${val}`)
    }
  }
}
</script>

<style scoped></style>
