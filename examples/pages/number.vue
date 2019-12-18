<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox text-center fs-14">
      <div class="pd-15">
        <p class="mb-5">max：10，min：1，默认步长1</p>
        <hua-number :max="10" :min="1" v-model="num"></hua-number>
      </div>
      <div class="pd-15">
        <p class="mb-5">max：30，min：1，步长0.5</p>
        <hua-number :max="30" :min="1" v-model="num1" :step="0.5"></hua-number>
      </div>
      <div class="pd-15">
        <p class="mb-5">max：10，min：1，步长2</p>
        <hua-number :max="10" :min="1" v-model="num2" :step="2"></hua-number>
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
    };
  }
};
</script>
<style>
.btn1 {
  box-shadow: inset 0 0px 1000px rgba(0, 0, 0, 0.125);
}
</style>
