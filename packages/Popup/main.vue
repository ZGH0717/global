<template>
  <div>
    <transition :name="position ? 'hua-popup-' + position : 'hua-popup'">
      <div
        :class="[position ? 'hua-popup-' + position : 'hua-popup']"
        v-show="currentActive"
      >
        <slot></slot>
        <div class="close" @click="hideProp"></div>
      </div>
    </transition>
    <transition name="hua-opcity">
      <div class="mask" v-show="currentActive" @click="maskHandle"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HuaPopup',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    isMaskClick: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentActive: this.value
    }
  },
  watch: {
    currentActive (val) {
      this.$emit('input', val)
    },
    value () {
      this.currentActive = this.value
    }
  },
  methods: {
    hideProp () {
      this.currentActive = false
    },
    maskHandle () {
      if (!this.isMaskClick) return
      this.hideProp()
    }
  }
}
</script>
