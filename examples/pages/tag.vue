<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox text-center ">
      <div
        class="relative clearfix bg-f mt-15 pd-15 fs-12 color-6"
        v-for="(item, index) in type"
        :key="index"
      >
        <div class="middle">
          <div><span class="font-bold color-0">type：</span>{{ item }}</div>
        </div>
        <div class="absoluteRC" style="right:15px;">
          <hua-tag :type="item">确认</hua-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: [
        'tag-default',
        'tag-primary-color',
        'tag-success-color',
        'tag-info-color',
        'tag-warning-color',
        'tag-danger-color',
        'tag-primary',
        'tag-success',
        'tag-info',
        'tag-warning',
        'tag-danger'
      ]
    }
  }
}
</script>
<style>
.tag1 {
  box-shadow: inset 0 0px 1000px rgba(0, 0, 0, 0.125);
}
</style>
