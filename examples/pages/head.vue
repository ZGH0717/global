<template>
  <div class="mainBox w100">
    <div class="relative mgB30" style="height:10%">
      <i-head :title="$route.meta.title"></i-head>
    </div>
    基本用法
    <div class="relative mgB30" style="height:10%">
      <i-head :is-back="false" class="middle_before">
        <button class="iconL colorf" slot="iconL">iconL</button>
        <div slot="title" class="middle colorf">title</div>
        <button class="iconR colorf" slot="iconR">iconR</button>
      </i-head>
    </div>
    和Search组件一起使用
    <div class="relative mgB30" style="height:10%">
      <i-head class="middle_before" :is-back="false">
        <i-search class="middle" slot="title" v-model="searchval" cls="radius34" v-on:click="searchHandle" placeholder="请输入内容"></i-search>
      </i-head>
    </div>
    和Search组件一起使用
    <div class="relative mgB30" style="height:10%">
      <i-head class="middle_before" :is-back="false">
        <i-search class="middle" slot="title" v-model="searchval" cls="radius5" v-on:click="searchHandle" placeholder="请输入内容"></i-search>
      </i-head>
    </div>


  </div>
</template>

<script>
  export default {

    data() {
      return {
        searchval: ''
      }
    },
    computed: {

    },
    mounted() {

    },
    methods: {
      searchHandle() {
        console.log(this.searchval)
      }
    }
  }
</script>

<style lang="less" scoped>
  .search_input {
    @w: 56;
    @h: 56;
    width: 70%;
    height: 60%;
    border-radius: 6px;
    background: #f4f4f4;
    position: relative;
    text-align: left;
    font-size: 0;
    .iconfont {
      left: 0px;
      top: 0;
      color: #333;
      width: 13%;
      text-align: center;
    }
    .val {
      background: transparent;
      /*height:100%;*/
      width: 85%;
      font-size: 16px;
    }
  }
</style>
