<template>
  <div class="propBox">
    <transition name="iv-popup">
      <div class="pdT30   pdL15 pdR15 alert  bgf" ref="prop" v-show="visible">
        <slot>
          <div class="color3 pdL15 pdR15 fs16" style="word-wrap: break-word">{{message}}</div>
          <div class="textC m-fs34 mgT10 ">
            <button class=" center-block w100 pd15 middle common-color textR" @click="handleSure">
              <span class="middle">确定</span>
            </button>
          </div>
        </slot>
        <div v-if="isClose" class="close" @click="_close"></div>
      </div>
    </transition>
    <transition name="iv-opcity">
      <div class="mask" v-show="visible" @click="maskHandle"></div>
    </transition>
  </div>

</template>

<script>
  export default {
    name: 'IAlert',
    data() {
      return {
        isClose: false,
        message: '',
        isMaskClick: false,
        visible: false,
        onHide: () => {
        },
        onConfirm: () => {
          this._close()
        }
      }
    },
    computed: {},
    mounted() {

    },
    methods: {
      _show() {
        this.visible = true;
      },
      _close() {
        this.visible = false;
      },
      maskHandle() {
        if (!this.isMaskClick) return;
        this._close()
      },
      handleSure() {
        console.log(111)
        this.onConfirm();
      },
      hide() {
        this.onHide();
      }
    },
    beforeDestory() {
      this._close();
    }
  }
</script>
