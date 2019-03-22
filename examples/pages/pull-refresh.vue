<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox ">
      <global-pull-refresh
        v-model="loading"
        v-on:refresh="update"
        v-on:load="loadMore"
      >
        <global-cell class="text-center color-red">
          （手机模式下查看效果）
        </global-cell>
        <global-cell v-for="i in length" :key="i">
          {{ i }}刷新次数：{{ refreshNum }}r
        </global-cell>
      </global-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      refreshNum: 0,
      length: 15
    };
  },
  methods: {
    update() {
      setTimeout(() => {
        this.loading = false;
        this.refreshNum++;
        this.length = 15;
      }, 3000);
    },
    loadMore() {
      setTimeout(() => {
        this.loading = false;
        this.length += 10;
      }, 2000);
    }
  }
};
</script>
<style>
.btn1 {
  box-shadow: inset 0 0px 1000px rgba(0, 0, 0, 0.125);
}
</style>
