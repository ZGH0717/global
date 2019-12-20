<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox text-center ">
      <br />

        <hua-badge :value="20" :max="10">
          <hua-button size="btn-lg" class="relative">
            消息
          </hua-button>
        </hua-badge>

      <br />
      <br />

        <hua-badge is-dot>
          <hua-button size="btn-lg" class="relative">
            消息
          </hua-button>
        </hua-badge>

    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-md',
  data () {
    return {
      taggleActive: false
    }
  },
  methods: {
    showAlert () {
      this.$alert({
        message: `点了${this.n}次`,
        onShow: () => {
          console.log(this)
          this.n++
        },
        onHide: () => {
          this.$alert.close()
        }
      })
    }
  }
}
</script>
<style>
</style>
