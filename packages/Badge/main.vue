<template>
  <div
    class="hua-badge"
  >
    <slot></slot>
    <sup
      v-if="isDot || value"
      class="hua-badge__content"
      :class="{ 'show-value': !isDot }"
    >
       {{content}}
    </sup>
  </div>
</template>

<script>
export default {
  name: 'HuaBadge',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    isDot: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 99
    }
  },
  computed: {
    content () {
      return typeof this.value === 'number' ? this.value > this.max ? `${this.value}+` : this.value : this.value
    }
  }
}
</script>
