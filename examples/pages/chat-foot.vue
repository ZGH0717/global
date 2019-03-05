<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top">

    </div>
    <i-chat-foot v-on:sendHandle="onSend"></i-chat-foot>

  </div>

</template>

<script>
  export default {
    name: "chat-foot",
    methods:{
      onSend(val){
        this.$alert.show(`发送内容为${val}`)
      }
    }

  }
</script>

<style scoped>

</style>
