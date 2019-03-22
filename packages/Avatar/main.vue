<template>
  <div
    class="global-avatar"
    :class="{ circle: !radius && isCircle }"
    :style="{
      borderRadius: radius + unit,
      width: currentWidth,
      height: paddingBottom != 0 ? 'auto' : currentHeight,
      paddingBottom
    }"
  >
    <img class="absoluteCC" lazy-load :src="image" alt="" />
  </div>
</template>

<script>
export default {
  name: "GlobalAvatar",
  props: {
    image: {
      type: String,
      default:
        "http://thirdwx.qlogo.cn/mmopen/t3ZdRH8jZDJ8a7JRBUM6ibFzblvKgbQ3Zze5WVPhEl7yKhnCR9G7oic6kGqcZoiaxNITDxOxdDiadlPnQtiaD9qIpM8C28JmnBf6V/132"
    },
    isCircle: {
      type: Boolean,
      default: true
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    size: {
      type: [String, Number],
      default: 40
    },
    width: {
      type: [String, Number],
      default: ""
    },
    height: {
      type: [String, Number],
      default: ""
    }
  },
  computed: {
    unit() {
      return "px";
    },
    currentWidth() {
      return this.width
        ? typeof this.width === "string"
          ? this.width
          : this.width + this.unit
        : typeof this.size === "string"
        ? this.size
        : this.size + this.unit;
    },
    currentHeight() {
      return this.height
        ? typeof this.height === "string"
          ? this.height
          : this.height + this.unit
        : typeof this.size === "string"
        ? this.size
        : this.size + this.unit;
    },
    paddingBottom() {
      return this.width && !this.height ? "100%" : "0";
    }
  }
};
</script>
