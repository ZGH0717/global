<template>
  <div class="propBox">
    <transition name="hua-popup">
      <div class="pt-30 pl-15 pr-15 hua-alert bg-f" ref="prop" v-show="visible">
        <slot>
          <div class="color-3  pl-15 pr-15 fs-16" style="word-wrap: break-word">
            {{ message }}
          </div>
          <div class="text-center m-fs-34 mt-10 ">
            <button
              class=" center-block w100 pd-15 middle common-color text-right"
              @click="handleSure"
            >
              <span class="middle">确定</span>
            </button>
          </div>
        </slot>
        <div v-if="isClose" class="close" @click="_close"></div>
      </div>
    </transition>
    <transition name="hua-opcity">
      <div class="mask" v-show="visible" @click="maskHandle"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "hua-Alert",
  data() {
    return {
      isClose: false,
      message: "",
      isMaskClick: false,
      visible: false,
      onHide: () => {},
      onConfirm: () => {
        this._close();
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    _show() {
      this.visible = true;
    },
    _close() {
      this.visible = false;
    },
    maskHandle() {
      if (!this.isMaskClick) return;
      this._close();
    },
    handleSure() {
      this.onConfirm();
    },
    hide() {
      this.onHide();
    }
  },
  beforeDestory() {
    this._close();
  }
};
</script>
