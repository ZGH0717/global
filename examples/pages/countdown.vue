<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox ">
      <i-cell>
        秒杀剩余时间：  <i-countdown class="middle" :remain-time="50000"></i-countdown>
      </i-cell>

    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
