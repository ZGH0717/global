<template>
  <div class=" i-collapse ">
    <i-cell is-arrow is-roate v-on:click="onHandle" style="z-index: 1">
      <i class="iconfont i-arrow" slot="iconR">&#xe6a5;</i>
      <slot name="title"></slot>
    </i-cell>
    <!--name="iv-collapse"-->
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
    name: "ICollapse",
    components: {
      Cell
    },
    props: {},
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      onHandle(isActive) {
        this.isActive = isActive
      }
    }

  }
</script>
