<template>
  <div class="propBox">
    <transition name="iv-popup">
      <div class="pdT30 pdL15 pdR15 confirm  bgf" ref="prop" v-show="visible"
           :style="styles">
        <slot>
          <div v-if="isInput" class="color3  pdR15 bold fs18 " style="word-wrap: break-word"> {{message}}</div>
          <div v-else class="color3  pdR15  pdB20 pdT5 fs18 " style="word-wrap: break-word"> {{message}}</div>
          <div class="mgT20" v-if="isInput">
            <input class="text-input m-fs30 fs14 w100" v-model="content" type="text" placeholder="请输入内容">
          </div>
          <div class="textC m-fs30 mgT10 clearfix">
            <button class=" center-block  pd15 middle l common-color" @click="hide">
              <span class="middle">取消</span>
            </button>
            <button class=" center-block pd15 middle common-color r" @click="handleSure">
              <span class="middle">确定</span>
            </button>
          </div>
        </slot>
      </div>
    </transition>
    <transition name="iv-opcity">
      <div class="mask" v-show="visible" @click="maskHandle"></div>
    </transition>
  </div>

</template>

<script>
  export default {
    name: 'IConfirm',
    data() {
      return {
        message: '消息',
        isMaskClick: false,
        visible: false,
        styles: {},
        onConfirm: function () {
        },
        onCancel: function () {
        },
        content: '',
        isInput: false

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
        this.onConfirm(this);
      },
      hide() {
        this.onCancel(this);
      }
    }
  }
</script>


