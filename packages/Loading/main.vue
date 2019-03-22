<template>
  <div class="global-loading middle" :class="[position]">
    <span
      class="global-loading-box"
      :style="{ width: size + 'px', height: size + 'px' }"
    >
      <svg class="global-loading--circular" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" :style="{ stroke: color }" />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "GlobalLoading",
  props: {
    type: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#fff"
    },
    size: {
      type: String,
      default: "40"
    }
  },
  data() {
    return {
      attr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
    };
  },
  computed: {}
};
</script>
