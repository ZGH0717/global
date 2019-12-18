<template>
  <div class="btn hua-cell borderB" @click="handle">
    <slot></slot>
    <div v-if="isArrow" class="iconR">
      <span class="hua-arrow" :class="{ active: isActive }">
        <slot name="iconR">
          <i class="iconfont ">&#xe6a7;</i>
        </slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HuaCell",
  props: {
    isArrow: {
      type: Boolean,
      default: false
    },
    isRoate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handle() {
      if (this.isRoate) this.isActive = !this.isActive;
      this.$emit("click", this.isActive);
    }
  }
};
</script>
