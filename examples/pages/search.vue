<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox ">
      <div class="pdT20">
        <i-search v-model="value1" cls=" radius34" v-on:click="searchHandle" placeholder="请输入内容"></i-search>
      </div>
      <div class="pdT20">
        <i-search v-model="value2" cls=" radius5" v-on:click="searchHandle" placeholder="请输入"></i-search>
      </div>
      <div class="pdT20">
        <i-search v-model="value3" cls="radius15" v-on:click="searchHandle" placeholder="请输入搜索"></i-search>
      </div>
      <div class="pdT20">
        <i-search v-model="value4"  v-on:click="searchHandle" placeholder="请输入兑换码"></i-search>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1:'',
        value2:'',
        value3:'',
        value4:'',
      }
    },
    methods: {
      searchHandle(val) {
        this.$alert({
          message: `输入的值为：${val}`,
          onConfirm: () => {
            this.$alert.close()
          },
          onHide: () => {
            this.$alert.close()
          }
        })
      }
    }
  }
</script>
<style>
  .btn1 {
    box-shadow: inset 0 0px 1000px rgba(0, 0, 0, .125);
  }
</style>
