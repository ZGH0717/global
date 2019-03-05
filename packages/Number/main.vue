<template>

  <div class="i-number middle">
    <span @click="minusHandle" :class="currentValue==currentMin ? 'disable':''">-</span>
    <input type="tel" name="" v-model="currentValue" @change="changeVal"/>
    <span @click="addHandle" :class="currentValue==currentMax ? 'disable':''">+</span>
  </div>

</template>

<script>
  export default {
    name: "INumber",
    props: {
      value: {
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
      }
    },
    data() {
      return {
        currentValue: this.value,
        currentMax: this.max,
        currentMin: this.min
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
    methods: {
      addHandle() {
        if (this.currentValue >= this.currentMax) {
          this.currentValue = this.currentMax;
          return;
        }
        this.currentValue += this.step;
      },
      minusHandle() {
        if (this.currentValue <= this.currentMin) {
          this.currentValue = this.currentMin;
          return;
        }
        this.currentValue -= this.step;
      },
      changeVal() {
        if (this.currentValue >= this.currentMax) {
          this.currentValue = this.currentMax;
          return;
        }
        if (this.currentValue <= this.currentMin) {
          this.currentValue = this.currentMin;
          return;
        }
      }
    }
  }
</script>
