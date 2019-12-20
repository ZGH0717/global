<template>
  <div
    class="hua-dropdown"
    :class="{ 'hover-animate': trigger === 'hover', active: showDropdown }"
    ref="dropdownRef"
  >
    <transition name="el-zoom-in-top">
      <div
        class="dropdown-box"
        :class="[placement]"
        v-show="showDropdown"
        :style="{
          top: dropdownTitleHeight + 'px'
        }"
      >
        <div class="dropdown-content">
          <slot></slot>
          <span
            class="triangle"
            :style="{
              left:
                placement.indexOf('left') > -1
                  ? dropdownTitleWidth / 2 - 2.5 + 'px'
                  : 'auto',
              right:
                placement.indexOf('right') > -1
                  ? dropdownTitleWidth / 2 - 2.5 + 'px'
                  : 'auto'
            }"
          ></span>
        </div>
      </div>
    </transition>
    <div class="dropdown-title" ref="dropdownTitleRef">
      <slot name="dropdown-head"></slot>
    </div>
  </div>
</template>

<script>
import { off, on } from '@/utils/dom'

export default {
  name: 'HuaDropdown',
  props: {
    placement: {
      type: String,
      default: 'bottom-left'
    },
    trigger: {
      type: String,
      default: 'click'
    }
  },
  data () {
    return {
      dropdownTitleHeight: 0,
      dropdownTitleWidth: 0,
      showDropdown: false
    }
  },
  mounted () {
    this.dropdownTitleHeight = this.$refs.dropdownTitleRef.offsetHeight
    this.dropdownTitleWidth = this.$refs.dropdownTitleRef.offsetWidth
    if (this.trigger === 'click') {
      on(this.$refs.dropdownTitleRef, 'click', this.globalSelectHandle)
      on(document, 'click', this.handleDocumentClick)
    } else if (this.trigger === 'hover') {
      on(this.$refs.dropdownRef, 'mouseenter', this._show)
      on(this.$refs.dropdownRef, 'mouseleave', this._hide)
    }
  },
  methods: {
    globalSelectHandle () {
      if (this.trigger === 'click') {
        this.showDropdown = !this.showDropdown
      }
    },
    handleDocumentClick (e) {
      if (this.$el.contains(e.target)) {
        return
      }
      this._hide()
    },
    _hide () {
      this.showDropdown = false
    },
    _show () {
      this.showDropdown = true
    },
    offHandleDocument () {
      off(document, 'click', this.handleDocumentClick)
    }
  },
  destroyed () {
    this.offHandleDocument()
  }
}
</script>
