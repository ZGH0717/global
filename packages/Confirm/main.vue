<template>
  <div class="propBox">
    <transition name="hua-popup">
      <div
        class="pt-30 pl-15 pr-15 hua-confirm  bg-f"
        ref="prop"
        v-show="visible"
        :style="styles"
      >
        <slot>
          <div
            v-if="isInput"
            class="color-3  pr-15 font-blod fs-18 "
            style="word-wrap: break-word"
          >
            {{ message }}
          </div>
          <div
            v-else
            class="color-3  pr-15  pb-20 pt-5  fs-18 "
            style="word-wrap: break-word"
          >
            {{ message }}
          </div>
          <div class="mt-20" v-if="isInput">
            <input
              class="text-input fs-15 fs-14 width-100"
              v-model="content"
              type="text"
              placeholder="请输入内容"
            />
          </div>
          <div class="text-center fs-15 mt-10 clearfix">
            <button
              class=" center-block  pd-15 middle l common-color"
              @click="hide"
            >
              <span class="middle">取消</span>
            </button>
            <button
              class=" center-block pd-15 middle common-color r"
              @click="handleSure"
            >
              <span class="middle">确定</span>
            </button>
          </div>
        </slot>
      </div>
    </transition>
    <transition name="hua-opcity">
      <div class="mask" v-show="visible" @click="maskHandle"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HuaConfirm',
  data () {
    return {
      message: '消息',
      isMaskClick: false,
      visible: false,
      styles: {},
      onConfirm: function () {},
      onCancel: function () {},
      content: '',
      isInput: false
    }
  },
  computed: {},
  mounted () {},
  methods: {
    _show () {
      this.visible = true
    },
    _close () {
      this.visible = false
    },
    maskHandle () {
      if (!this.isMaskClick) return
      this._close()
    },
    handleSure () {
      this.onConfirm(this)
    },
    hide () {
      this.onCancel(this)
    }
  }
}
</script>
