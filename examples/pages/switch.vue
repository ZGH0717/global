<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox fs-14">
      <hua-switch class="pd-15" v-model="taggleActive" v-on:click="clickHandle">
        开启夜间模式
      </hua-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: 'switch-md',
  data () {
    return {
      taggleActive: false
    }
  },
  methods: {
    clickHandle () {
      this.$confirm({
        message: `是否${this.taggleActive ? '关闭' : '开启'}夜间模式？`,
        onConfirm: () => {
          this.taggleActive = !this.taggleActive
          this.$confirm.close()
        },
        onCancel: () => {
          this.$confirm.close()
        }
      })
    }
  }
}
</script>
