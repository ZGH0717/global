<template>
  <div class="side-nav">
    <!--<h1 class="hua-title"></h1>-->
    <h2 class="hua-desc">hua-ui 移动组件库</h2>
    <div class="mobile-navs">
      <div v-for="(item, index) in data" :key="index">
        <div class="mobile-nav-item" v-if="item.showInMobile">
          <mobile-nav
            v-for="(group, s) in item.groups"
            :group="group"
            :base="base"
            :key="s"
          ></mobile-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navConfig from '../nav.config.json'
import MobileNav from './mobile-nav'

export default {
  data () {
    return {
      data: navConfig['zh-CN'],
      base: '/component'
    }
  },

  components: {
    MobileNav
  }
}
</script>

<style lang="postcss">
.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 15px 20px;
  position: relative;
  z-index: 1;

  .hua-title,
  .hua-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }

  .hua-title {
    padding-top: 40px;
    height: 0;
    overflow: hidden;
    background-size: 40px 40px;
    margin-bottom: 10px;
  }

  .hua-desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 50px;
  }
}
</style>
