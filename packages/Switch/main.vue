<template>
  <div class="i-switch" :class="{active:currentValue}" @click="Handle">
    <slot></slot>
    <div class="switch">
      <span class="bar"></span>
      <span class="circle"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ISwitch',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentValue: this.value,
      }
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      },
      value() {
        this.currentValue = this.value;
      }
    },
    methods:{
      Handle(){
        this.$emit('click')
      }
    }
  }
</script>
