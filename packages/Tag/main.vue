<template>
  <button :class="['global-tag', type]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "GlobalTag",
  props: {
    type: {
      type: String,
      default: "tag-default"
    }
  }
};
</script>
