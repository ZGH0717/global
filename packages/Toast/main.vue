<template>
  <div>
    <transition :name="type ? 'hua-popup' : 'hua-toast'">
      <div
        class="hua-toast"
        :class="[type ? 'middle' : '']"
        v-show="visible"
        :style="styles"
      >
        <div class="text-center" style="min-width: 100%;">
          <slot>
            <hua-loading v-if="type === 'loading'" :color="color"></hua-loading>
            <i class="iconfont" v-if="type === 'success'" style="color:#4cae4c"
              >&#xe6b1;</i
            >
            <i class="iconfont" v-if="type === 'fail'" style="color:red"
              >&#xe6b7;</i
            >
            <i class="iconfont" v-if="type === 'warning'" style="color:#eea236"
              >&#xe6b6;</i
            >
            <div class="color-f row1 fs-16">{{ message }}</div>
          </slot>
        </div>
      </div>
    </transition>
    <transition name="hua-opcity">
      <div class="mask" v-show="type && visible"></div>
    </transition>
  </div>
</template>

<script>
import HuaLoading from "../Loading";

export default {
  name: "HuaToast",
  components: {
    HuaLoading
  },
  data() {
    return {
      message: "",
      visible: false,
      type: "",
      styles: {},
      timer: null,
      duration: 1000,
      color: "#db2227"
    };
  },
  watch: {
    visible(val) {
      this.$emit("input", val);
    },
    value() {
      this.visible = this.value;
    }
  },
  methods: {
    _show() {
      this.visible = true;
      if (this.type) return;

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this._close();
      }, this.duration);
    },
    _close() {
      this.visible = false;
    }
  }
};
</script>
