<template>
  <div style="width:98%;">
    <div class="hua-search">
      <div class="search-input">
        <i class="iconfont icon-search"></i>
        <input
          type="text"
          v-model="currentActive"
          :class="[cls, 'form-control']"
          @focus="onFocus"
          @blur="onBlur"
          @keyup.13="onClick"
          @change="onChange"
          :placeholder="placeholder"
        />
        <i class="iconfont icon-close" v-if="currentActive" @click="clearValue"></i>
      </div>
      <span class="back" v-if="isFocus" @click="$router.go(-1)">取消</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HuaSearch',
  props: {
    value: {
      type: String,
      default: ''
    },
    cls: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索'
    }
  },
  data () {
    return {
      currentActive: this.value,
      isFocus: false
    }
  },
  watch: {
    currentActive (val) {
      this.$emit('input', val)
    },
    value () {
      this.currentActive = this.value
    }
  },
  computed: {},
  mounted () {},
  methods: {
    onClick () {
      this.$emit('click', this.currentActive)
    },
    onBlur () {
      this.isFocus = false
      this.$emit('blur', this.currentActive)
    },
    onFocus () {
      this.isFocus = true
      this.$emit('focus', this.currentActive)
    },
    onChange () {
      this.$emit('change', this.currentActive)
    },
    clearValue () {
      this.currentActive = ''
    }
  }
}
</script>
