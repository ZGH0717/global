<template>
  <div class="h100 w100">
    <i-head :title="$route.meta.title"></i-head>
    <div class="common-top mainBox ">
      <i-pull-refresh v-model="loading" v-on:refresh="update" v-on:load="loadMore">

        <i-cell class="textC color-red">
          （手机模式下查看效果）
        </i-cell>
        <i-cell v-for="i in length" :key="i">
          {{i}}刷新次数：{{refreshNum}}
        </i-cell>
      </i-pull-refresh>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading:false,
        refreshNum:0,
        length:15
      }
    },
    methods: {
      update(){
        setTimeout(()=>{
          this.loading=false
          this.refreshNum++
          this.length=15
        },3000)
      },
      loadMore(){
        setTimeout(()=>{
          this.loading=false
          this.length+=10
        },2000)
      }
    }
  }
</script>
<style>
  .btn1 {
    box-shadow: inset 0 0px 1000px rgba(0, 0, 0, .125);
  }
</style>
