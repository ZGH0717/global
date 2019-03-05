<template>
  <div class="i-pull-refresh"
       :style="{transform:`translate3d(0,${translateY}px,0)`,transition: isTransition ? '300ms':'none'}">
    <div class="state-tip">
      <i class="iconfont fs14 derection" v-if="!loading" :class="{active:derection}">&#xe65b;</i>
      <i-loading size="18" v-if="loading" color="red"></i-loading>
      &nbsp;
      {{msg}}
    </div>
    <div class="scrollBox" ref="scrollBox">
      <div ref="contentBox">
        <slot></slot>
        <div class="pd10 textC fs14">
          <i-loading size="18" v-if="loading" color="red"></i-loading>
          &nbsp;
          {{loadMsg}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import ILoading from '../Loading'

  export default {
    name: 'IPullRefresh',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    components: {
      ILoading
    },
    data() {
      return {
        length: 1,
        msg: '下拉刷新',
        scrollTop: 0,
        flag: 0, // 表示是否达到刷新条件
        loading: this.loading, // 表示是否正在刷新中
        touchStartY: 0, // 手指触摸屏幕的起点Y
        touchStartX: 0, // 手指触摸屏幕的起点X
        distance: 0,// 手指滑动的距离
        translateY: 0,
        isTransition: 0,
        derection: 0,
        size: 50,
        requestFram: null,
        oldScrollTop: 0,
        contentH: 0,
        loadMsg: '正在加载...'
      }
    },
    watch: {
      value(val) {
        if (val == false) {
          if (this.flag) {
            this.flag = 0
            this.msg = '下拉刷新'
            this.translateY = 0
            this.derection = 0
            this.loadMsg = '数据刷新中...'
          } else {
            this.loadMsg = '我是有底线的'
          }
        }
        this.loading = val

      },
      loading(val) {

        this.$emit('input', val)
      }
    },
    computed: {
      scrollBox() {
        return this.$refs.scrollBox
      },
      contentBox() {
        return this.$refs.contentBox
      },
      boxH() {
        return this.scrollBox.offsetHeight
      }
    },
    mounted() {
      this.scrollBox.addEventListener('touchstart', (e) => {
        this.start(e)
      }, false);
      this.scrollBox.addEventListener('touchmove', (e) => {
        this.scrollTop = this.scrollBox.scrollTop
        this.move(e)
      }, false);
      this.scrollBox.addEventListener('touchend', (e) => {
        this.end(e)
      }, false);
    },
    methods: {
      start(e) {
        this.touchStartY = e.targetTouches[0].clientY
        this.touchStartX = e.targetTouches[0].clientX;
        this.contentH = this.contentBox.offsetHeight
      },
      move(e) {
        this.refreshMove(e);
        this.loadMove(e)
      },
      end(e) {
        this.refreshEnd(e);
        this.loadEnd(e)
      },
      refreshMove(e) {
        if (this.scrollTop != 0) return;
        let touch = e.targetTouches[0]
        this.distance = touch.clientY - this.touchStartY
        if (this.distance < 0 || Math.abs(this.distance / (touch.clientX - this.touchStartX)) < 1) return;
        if (this.isTransition) {
          this.isTransition = 0
        }
        if (this.loading) {
          this.translateY = this.distance / 2 + this.size
        } else {
          this.translateY = this.distance / 2
          if (this.distance > 100) {
            this.flag = 1
            this.msg = '释放刷新'
            this.derection = 1
          } else {
            this.flag = 0
          }
        }
      },
      refreshEnd(e) {
        if (this.scrollTop != 0) return;
        if (this.distance < 0) return;

        if (this.flag) {
          this.isTransition = 1
          this.translateY = this.size
        } else {
          this.isTransition = 1
          this.translateY = 0
        }
        if (this.loading) return;
        if (this.distance >= 100) {
          this.loading = true
          this.msg = '正在刷新'
          this.$emit('refresh')
        }
      },
      loadMove(e) {
        if (this.contentH - this.scrollTop - this.boxH < 30 && !this.flag && !this.loading) {
          this.loading = true;
          this.loadMsg = '正在加载...'
          this.$emit('load')
        }
      },
      loadEnd(e) {
        this.requestFram = requestAnimationFrame(() => {
          this.scrollTop = this.scrollBox.scrollTop
          if (this.scrollTop != this.oldScrollTop) {
            this.oldScrollTop = this.scrollTop;
            this.loadEnd()
          } else {
            cancelAnimationFrame(this.requestFram);
            this.contentH = this.contentBox.offsetHeight
            this.loadMove();
          }
        })
      }
    }
  }
</script>
