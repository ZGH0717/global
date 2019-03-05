<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox ">
      <div  class="mgB15 ">
        无插槽 速度根据内容自适应
        <i-notice-bar content="无icon无icon无icon无icon无icon无icon无icon无icon无icon无icon无icon">
        </i-notice-bar>
      </div>
      <div  class="mgB15 ">
        有左插槽icon 速度5
        <i-notice-bar :seed="5" content="有左icon有左icon有左icon">
          <i class="iconfont" slot="iconL">&#xe756;</i>
        </i-notice-bar>
      </div>
      <div  class="mgB15 ">
        有右插槽icon 速度10
        <i-notice-bar :seed="10" content="有左icon有左icon有左icon有左icon有左icon有左icon有左icon有左icon">
          <i class="iconfont" slot="iconR">&#xe6a7;</i>
        </i-notice-bar>
      </div>
      <div  class="mgB15 ">
        有左右插槽icon 速度15
        <i-notice-bar :seed="15" content="有左右icon有左右icon有左右icon有左右icon有左右icon有左右icon有左右icon有左右icon">
          <i class="iconfont" slot="iconL">&#xe756;</i>
          <i class="iconfont" slot="iconR">&#xe6a7;</i>
        </i-notice-bar>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
