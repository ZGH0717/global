<template>
  <div>
    <transition :name="type ? 'iv-popup':'iv-toast'">
      <div class="i-toast" :class="[type?'middle':'']" v-show="visible"
           :style="styles">
        <div class="textC" style="min-width: 100%;">
          <slot>
            <i-loading v-if="type==='loading'" :color="color"></i-loading>
            <i class="iconfont" v-if="type==='success'" style="color:#4cae4c">&#xe6b1;</i>
            <i class="iconfont" v-if="type==='fail'" style="color:red">&#xe6b7;</i>
            <i class="iconfont" v-if="type==='warning'" style="color:#eea236">&#xe6b6;</i>
            <div class="colorf row1 fs16">{{message}}</div>
          </slot>
        </div>
      </div>
    </transition>
    <transition name="iv-opcity">
      <div class="mask" v-show="type && visible "></div>
    </transition>
  </div>

</template>

<script>
  import ILoading from '../Loading'

  export default {
    name: 'IToast',
    components: {
      ILoading
    },
    data() {
      return {
        message: '',
        visible: false,
        type: '',
        styles: {},
        timer: null,
        color: '#db2227'

      }
    },
    watch: {
      visible(val) {
        this.$emit('input', val);
      },
      value() {
        this.visible = this.value;
      }
    },
    methods: {
      _show() {
        this.visible = true;
        clearTimeout(this.timer)
        if (this.type) return;


        this.timer = setTimeout(() => {
          this._close()
        }, 1000)
      },
      _close() {
        this.visible = false;
      },

    }
  }
</script>
