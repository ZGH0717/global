<template>
  <div class="app">
    <page-header></page-header>
    <div class="main-content ">
      <div class="page-container clearfix ">
        <side-nav class="absoluteLT" style="position: fixed;" :data="navConfig['zh-CN']" base="/component"></side-nav>
        <div class="page-content ">
            <router-view></router-view>
            <footer-nav></footer-nav>
        </div>
        <div class="absoluteRC mobile " style="position: fixed; right: 50px">
          <iframe id="iframe" name="iframe" class="box-shadow radius5" src="/mobile.html#/" width="320" height="568" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'highlight.js/styles/atom-one-dark.css'

  import navConfig from './nav.config.json'
  import PageHeader from './components/page-header'
  import SideNav from './components/side-nav'
  import FooterNav from './components/footer-nav'

  export default {
    name: 'App',
    components: {
      PageHeader,
      SideNav,
      FooterNav
    },
    data() {
      return {
        navConfig: navConfig
      }
    }
  }
</script>

<style >
  //滚动条
  .el-scrollbar__bar.is-vertical{
    width:10px;
  }
  .el-scrollbar__thumb{
    background-color: rgba(144,147,153,.4);
  }
  .el-scrollbar{
    height:100%;
  }
  .el-scrollbar__wrap{
    overflow: scroll;
    height: 100%;
  }

  /* #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
  .page-content{
    padding:0 360px 0 250px;
  }
  .mobile{
    display: flex;
    justify-content:center;
    align-items:center;
  }

</style>
