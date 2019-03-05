<template>
  <div>
    <transition :name="position ? 'iv-popup-'+position:'iv-popup'">
      <div :class="[position ? 'iv-popup-'+position:'iv-popup']" v-show="currentActive">
        <slot></slot>
        <div class="close" @click="hideProp"></div>
      </div>
    </transition>
    <transition name="iv-opcity">
      <div class="mask" v-show="currentActive" @click="maskHandle"></div>
    </transition>
  </div>

</template>

<script>
  export default {
    name: 'IPopup',
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
    data() {
      return {
        currentActive: this.value
      }
    },
    watch: {
      currentActive(val) {
        this.$emit('input', val);
      },
      value() {
        this.currentActive = this.value;
      }
    },
    methods: {
      hideProp() {
        this.currentActive = false;
      },
      maskHandle() {
        if (!this.isMaskClick) return;
        this.hideProp()
      }
    }
  }
</script>
