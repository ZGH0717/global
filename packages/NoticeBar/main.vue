<template>
  <div class="global-notice-bar">
    &nbsp;
    <slot name="iconL"></slot>
    <div class="content">
      <p ref="p" :style="{ animationDuration: animationDuration }">
        {{ content }}
      </p>
    </div>
    <slot name="iconR"></slot>
  </div>
</template>

<script>
export default {
  name: "GlobalNoticeBar",
  props: {
    content: {
      type: String,
      default: ""
    },
    seed: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      animationDuration: ""
    };
  },
  mounted() {
    if (this.seed > 0) {
      this.animationDuration = this.seed + "s";
    } else {
      let p = this.$refs.p;
      let pWidth = p.offsetWidth;
      this.animationDuration = (pWidth / 35).toFixed(1) + "s";
    }
  }
};
</script>
