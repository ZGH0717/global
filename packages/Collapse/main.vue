<template>
  <div class="global-collapse ">
    <global-cell is-arrow is-roate v-on:click="onHandle" style="z-index: 1">
      <i class="iconfont global-arrow" slot="iconR">&#xe6a5;</i>
      <slot name="title"></slot>
    </global-cell>
    <!--name="global-collapse"-->
    <transition>
      <div class="content" v-show="isActive">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Cell from "../Cell";

export default {
  name: "GlobalCollapse",
  components: {
    Cell
  },
  props: {},
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    onHandle(isActive) {
      this.isActive = isActive;
    }
  }
};
</script>
