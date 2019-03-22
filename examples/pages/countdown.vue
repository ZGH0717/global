<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox ">
      <global-cell>
        秒杀剩余时间：
        <global-countdown
          class="middle"
          :remain-time="50000"
        ></global-countdown>
      </global-cell>
    </div>
  </div>
</template>

<script>
export default {};
</script>
