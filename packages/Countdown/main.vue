<template>

  <div class="i-countdown">
    <div class="span-time">
      <i-loading v-if="times.day===''"  size="15"></i-loading>
      {{times.day}}
    </div>
    天
    <div class="span-time"><i-loading v-if="times.hours===''" size="15"></i-loading>{{times.hours}}</div>
    时
    <div class="span-time"><i-loading v-if="times.minute===''" size="15"></i-loading>{{times.minute}}</div>
    分
    <div class="span-time"><i-loading v-if="times.seconds===''" size="15"></i-loading>{{times.seconds}}</div>
    秒
  </div>
</template>

<script>
  import ILoading from '../Loading'
  export default {
    name: "ICountdown",
    props: {
      remainTime: {
        type: Number,
        default: 9999999
      }
    },
    data() {
      return {
        time: this.remainTime,
        times: {
          seconds: '', //秒
          minute: '', //分
          hours: '', //时
          day: '' //天
        }
      }
    },
    mounted() {
      this.getRemainingTime(this.time)
    },
    methods: {
      getRemainingTime(remain_time) {
        if (remain_time <= 0 || !remain_time) {
          console.fail('传入时间格式错误或者已经完成')
          return
        }
        let milli;
        let timer = setInterval(() => {
          milli = remain_time;
          this.times.seconds = parseInt((remain_time) % 60);
          this.times.minute = parseInt((remain_time) / 60 % 60);
          this.times.hours = parseInt((remain_time) / 60 / 60 % 24);
          this.times.day = parseInt((remain_time) / 60 / 60 / 24);
          if (remain_time <= 0) {
            clearInterval(timer);
          }
          // = day + '天' + hours + '时' + minute + '分' + seconds + '秒'/* + milli + '毫秒'*/;

          remain_time -= 1;
        }, 1000)
      }
    }
  }
</script>
