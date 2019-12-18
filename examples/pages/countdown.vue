<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox ">
      <hua-cell>
        秒杀剩余时间：
        <hua-countdown class="middle" :remain-time="50000"></hua-countdown>
      </hua-cell>
    </div>
  </div>
</template>

<script>
export default {};
</script>
