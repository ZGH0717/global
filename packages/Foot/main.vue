<template>
  <footer id="global-foot">
    <router-link
      class=" "
      v-for="(item, index) in menus"
      :key="index"
      :to="item.to"
    >
      <zgh-touch-ripple>
        <div :class="index == 2 ? type : ''">
          <i
            v-if="!item.middleImg"
            class="iconfont color-3"
            v-html="item.iconfont"
          ></i>
          <img v-else :src="item.middleImg" alt="" />
          <span class="fs-12 color-3" v-if="!item.middleImg">{{
            item.name
          }}</span>
        </div>
      </zgh-touch-ripple>
    </router-link>
  </footer>
</template>

<script>
import TouchRipple from "../TouchRipple/index";

export default {
  name: "GlobalFoot",
  components: {
    "zgh-touch-ripple": TouchRipple
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    menus: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  mouted() {}
};
</script>
