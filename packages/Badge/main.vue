<template>
  <div
    class="hua-badge"
    :class="{ 'show-count': count > 0 }"
    :style="{
      top: currentTop,
      right: currentRight,
      bottom: currentBottom,
      left: currentLeft
    }"
  >
    {{ count > 0 ? count : "" }}
  </div>
</template>

<script>
export default {
  name: "HuaBadge",
  props: {
    count: {
      type: [String, Number],
      default: 0
    },
    top: {
      type: [String, Number],
      default: "auto"
    },
    right: {
      type: [String, Number],
      default: "auto"
    },
    left: {
      type: [String, Number],
      default: "auto"
    },
    bottom: {
      type: [String, Number],
      default: "auto"
    }
  },
  computed: {
    unit() {
      return "px";
    },

    currentTop() {
      return typeof this.top === "string" ? this.top : this.top + this.unit;
    },
    currentRight() {
      return typeof this.right === "string"
        ? this.right
        : this.right + this.unit;
    },
    currentBottom() {
      return typeof this.bottom === "string"
        ? this.bottom
        : this.bottom + this.unit;
    },
    currentLeft() {
      return typeof this.left === "string" ? this.left : this.left + this.unit;
    }
  }
};
</script>
