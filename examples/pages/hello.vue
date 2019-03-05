<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox">
      <v-hello message="my component library" @click="handleClick"></v-hello>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      handleClick(msg) {
        this.msg = msg
      }
    }
  }
</script>




