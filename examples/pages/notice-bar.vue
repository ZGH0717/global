<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox  fs-14 color-6">
      <div class="mb-15 ">
        无插槽 速度根据内容自适应
        <hua-notice-bar
          content="无icon无icon无icon无icon无icon无icon无icon无icon无icon无icon无icon"
        >
        </hua-notice-bar>
      </div>
      <div class="mb-15 ">
        有左插槽icon 速度5
        <hua-notice-bar :seed="5" content="有左icon有左icon有左icon">
          <i class="iconfont" slot="iconL">&#xe756;</i>
        </hua-notice-bar>
      </div>
      <div class="mb-15 ">
        有右插槽icon 速度10
        <hua-notice-bar
          :seed="10"
          content="有左icon有左icon有左icon有左icon有左icon有左icon有左icon有左icon"
        >
          <i class="iconfont" slot="iconR">&#xe6a7;</i>
        </hua-notice-bar>
      </div>
      <div class="mb-15 ">
        有左右插槽icon 速度15
        <hua-notice-bar
          :seed="15"
          content="有左右icon有左右icon有左右icon有左右icon有左右icon有左右icon有左右icon有左右icon"
        >
          <i class="iconfont" slot="iconL">&#xe756;</i>
          <i class="iconfont" slot="iconR">&#xe6a7;</i>
        </hua-notice-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
