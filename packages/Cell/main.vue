<template>
  <div class="btn hua-cell" @click="handle" :class="{borderB:border}">
    <slot></slot>
    <div v-if="isArrow" class="absoluteRC icon-r">
      <span class="hua-arrow" :class="{ active: isActive }">
        <slot name="iconR">
          <i class="iconfont">&#xe6a7;</i>
        </slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HuaCell',
  props: {
    isArrow: {
      type: Boolean,
      default: false
    },
    isRoate: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    handle () {
      if (this.isRoate) this.isActive = !this.isActive
      this.$emit('click', this.isActive)
    }
  }
}
</script>
