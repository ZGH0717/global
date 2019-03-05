<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox textC ">
      <div class="pd15">
        max：10，min：1，默认步长1
        <i-number :max="10" :min="1" v-model="num"></i-number>
      </div>
      <div class="pd15">
        max：30，min：1，步长0.5
        <i-number :max="30" :min="1" v-model="num1" :step="0.5"></i-number>
      </div>
      <div class="pd15">
        max：10，min：1，步长2
        <i-number :max="10" :min="1" v-model="num2" :step="2"></i-number>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1,
        num2: 1,
        num1: 1
      }
    }
  }
</script>
<style>
  .btn1 {
    box-shadow: inset 0 0px 1000px rgba(0, 0, 0, .125);
  }
</style>
