<template>
  <div class="hua-number middle">
    <span
      @click="minusHandle"
      :class="currentValue == currentMin ? 'disable' : ''"
      >-</span
    >
    <input type="tel" name="" v-model="currentValue" @change="changeVal" />
    <span
      @click="addHandle"
      :class="currentValue == currentMax ? 'disable' : ''"
      >+</span
    >
  </div>
</template>

<script>
export default {
  name: 'HuaNumber',
  props: {
    value: {
      type: Number,
      default: 1
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value,
      currentMax: this.max,
      currentMin: this.min
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    },
    value () {
      this.currentValue = this.value
    }
  },
  methods: {
    addHandle () {
      if (this.currentValue >= this.max) {
        this.currentValue = this.max || 1
        return
      }
      this.currentValue = Number(this.currentValue) + this.step * 1
    },
    minusHandle () {
      if (this.currentValue <= this.min) {
        this.currentValue = this.min
        return
      }
      this.currentValue -= this.step * 1
    },
    changeVal () {
      if (this.currentValue >= this.max) {
        this.currentValue = this.max
        return
      }
      if (this.currentValue <= this.min) {
        this.currentValue = this.min
      }
    }
  }
}
</script>
