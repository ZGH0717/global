<template>
  <div class="hua-collapse ">
    <hua-cell is-arrow is-roate v-on:click="onHandle" style="z-index: 1">
      <i class="iconfont hua-arrow" slot="iconR">&#xe6a5;</i>
      <slot name="title"></slot>
    </hua-cell>
    <!--name="hua-collapse"-->
    <transition>
      <div class="content" v-show="isActive">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Cell from '../Cell'

export default {
  name: 'HuaCollapse',
  components: {
    Cell
  },
  props: {},
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    onHandle (isActive) {
      this.isActive = isActive
    }
  }
}
</script>
