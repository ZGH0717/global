<template>
  <header id="hua-head" class="text-center">
    <slot name="iconL"></slot>
    <button
      v-if="isBack"
      class="iconL icon text-center color-f"
      @click="$router.go(-1)"
    >
      <i class="iconfont fs-22">&#xe697;</i>
    </button>
    <span v-if="title" class="fs-14 color-f title">{{ title }}</span>
    <slot name="title"></slot>
    <slot name="iconR"></slot>
    <!--<div v-if="borderB" class="hr"></div>-->
  </header>
</template>

<script>
export default {
  name: "hua-head",
  props: {
    imgL: {
      default() {
        return "";
      }
    },
    title: {
      default() {
        return "";
      }
    },
    isBack: {
      default() {
        return true;
      }
    },
    showMsg: {
      default() {
        return true;
      }
    },
    borderB: {
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      sideActive: false
    };
  },
  computed: {}
};
</script>
