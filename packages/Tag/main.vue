<template>
  <button :class="['hua-tag', type]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "HuaTag",
  props: {
    type: {
      type: String,
      default: "tag-default"
    }
  }
};
</script>
