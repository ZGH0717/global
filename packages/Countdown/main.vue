<template>
  <div class="hua-countdown">
    <div class="span-time">
      <hua-loading v-if="times.day === ''" size="15"></hua-loading>
      {{ times.day }}
    </div>
    天
    <div class="span-time">
      <hua-loading v-if="times.hours === ''" size="15"></hua-loading
      >{{ times.hours }}
    </div>
    时
    <div class="span-time">
      <hua-loading v-if="times.minute === ''" size="15"></hua-loading
      >{{ times.minute }}
    </div>
    分
    <div class="span-time">
      <hua-loading v-if="times.seconds === ''" size="15"></hua-loading
      >{{ times.seconds }}
    </div>
    秒
  </div>
</template>

<script>
import HuaLoading from '../Loading'
export default {
  name: 'HuaCountdown',
  props: {
    remainTime: {
      type: Number,
      default: 9999999
    }
  },
  components: {
    HuaLoading
  },
  data () {
    return {
      time: this.remainTime,
      times: {
        seconds: '', // 秒
        minute: '', // 分
        hours: '', // 时
        day: '' // 天
      }
    }
  },
  mounted () {
    this.getRemainingTime(this.time)
  },
  methods: {
    getRemainingTime (remainTime) {
      if (remainTime <= 0 || !remainTime) {
        console.fail('传入时间格式错误或者已经完成')
        return
      }
      // let milli;
      let timer = setInterval(() => {
        // milli = remainTime;
        this.times.seconds = parseInt(remainTime % 60)
        this.times.minute = parseInt((remainTime / 60) % 60)
        this.times.hours = parseInt((remainTime / 60 / 60) % 24)
        this.times.day = parseInt(remainTime / 60 / 60 / 24)
        if (remainTime <= 0) {
          clearInterval(timer)
        }
        // = day + '天' + hours + '时' + minute + '分' + seconds + '秒'/* + milli + '毫秒'*/;

        remainTime -= 1
      }, 1000)
    }
  }
}
</script>
