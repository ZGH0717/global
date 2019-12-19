<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox ">
      <hua-pull-refresh
        v-model="loading"
        v-on:refresh="update"
        v-on:load="loadMore"
      >
        <hua-cell class="text-center color-red">
          （手机模式下查看效果）
        </hua-cell>
        <hua-cell v-for="i in length" :key="i">
          {{ i }}刷新次数：{{ refreshNum }}r
        </hua-cell>
      </hua-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      refreshNum: 0,
      length: 15
    }
  },
  methods: {
    update () {
      setTimeout(() => {
        this.loading = false
        this.refreshNum++
        this.length = 15
      }, 3000)
    },
    loadMore () {
      setTimeout(() => {
        this.loading = false
        this.length += 10
      }, 2000)
    }
  }
}
</script>
<style>
</style>
