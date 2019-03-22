<template>
  <div
    class="global-badge"
    :class="{ 'show-count': count > 0 }"
    :style="{
      top: typeof top === 'string' ? top : top + 'px',
      right: typeof right === 'string' ? right : right + 'px',
      bottom: typeof bottom === 'string' ? bottom : bottom + 'px',
      left: typeof left === 'string' ? left : left + 'px'
    }"
  >
    {{ count > 0 ? count : "" }}
  </div>
</template>

<script>
export default {
  name: "GlobalBadge",
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
  }
};
</script>
