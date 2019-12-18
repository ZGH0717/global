<template>
  <button :class="['btn', size, type]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "HuaButton",
  props: {
    size: {
      type: String,
      default: "btn-sm"
    },
    type: {
      type: String,
      default: "btn-default"
    }
  }
};
</script>
