<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox">
      <i-button class="mgT10">
       加载中 <i-loading color="#db2227" size="14"></i-loading>
      </i-button>
      <i-button class="mgT10" type="btn-success" size="btn-sm">
        加载中 <i-loading color="#fff" size="24"></i-loading>
      </i-button>
      <i-loading position="center" class="absoluteCC" color="#db2227"></i-loading>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {}
    },
    methods: {}
  }
</script>




