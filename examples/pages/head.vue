<template>
  <div class="mainBox w100">
    <div class="relative mb-30" style="height:10%">
      <hua-head :title="$route.meta.title"></hua-head>
    </div>
    基本用法
    <div class="relative mb-30" style="height:10%">
      <hua-head :is-back="false" class="middle-box">
        <button class="iconL color-f" slot="iconL">iconL</button>
        <div slot="title" class="middle color-f">title</div>
        <button class="iconR color-f" slot="iconR">iconR</button>
      </hua-head>
    </div>
    和Search组件一起使用
    <div class="relative mb-30" style="height:10%">
      <hua-head class="middle-box" :is-back="false">
        <hua-search
          class="middle"
          slot="title"
          v-model="searchval"
          cls="radius-35"
          v-on:click="searchHandle"
          placeholder="请输入内容"
        ></hua-search>
      </hua-head>
    </div>
    和Search组件一起使用
    <div class="relative mb-30" style="height:10%">
      <hua-head class="middle-box" :is-back="false">
        <hua-search
          class="middle"
          slot="title"
          v-model="searchval"
          cls="radius-5"
          v-on:click="searchHandle"
          placeholder="请输入内容"
        ></hua-search>
      </hua-head>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchval: ''
    }
  },
  computed: {},
  mounted () {},
  methods: {
    searchHandle () {
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
#hua-head {
  background: #424242;
}
</style>
