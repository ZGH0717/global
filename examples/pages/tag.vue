<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox textC ">
      <div class="relative clearfix bgf mgT5 pd15 fs12 color6" v-for="item in type">

        <div class="middle">
          <div><span class="bold color0">type：</span>{{item}}</div>
        </div>
        <div class="absoluteRC" style="right:15px;">
          <i-tag :type="item">确认</i-tag>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: ['tag-default', 'tag-primary-color', 'tag-success-color', 'tag-info-color', 'tag-warning-color', 'tag-danger-color', 'tag-primary', 'tag-success', 'tag-info', 'tag-warning', 'tag-danger'],
      }
    }
  }
</script>
<style>
  .tag1 {
    box-shadow: inset 0 0px 1000px rgba(0, 0, 0, .125);
  }
</style>
