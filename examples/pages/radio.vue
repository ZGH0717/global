<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox fs-14">
      <div class="pd-15">
        <hua-radio
          v-model="selectValue"
          :list="list"
          key-name="city"
          value-name="id"
          type="button"
          iconfont="&#xe756;"
        >
        </hua-radio>
      </div>

      <hua-radio
        v-model="selectValue"
        :list="list"
        key-name="city"
        value-name="id"
        type="cell"
        iconfont="&#xe756;"
      >
      </hua-radio>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectValue: {
        id: 1,
        city: '厦门'
      },
      list: [
        {
          id: 1,
          city: '厦门'
        },
        {
          id: 2,
          city: '广州'
        },
        {
          id: 3,
          city: '深圳'
        },
        {
          id: 4,
          city: '上海'
        },
        {
          id: 5,
          city: '北京'
        },
        {
          id: 6,
          city: '杭州'
        },
        {
          id: 7,
          city: '武汉'
        },
        {
          id: 8,
          city: '南京'
        },
        {
          id: 9,
          city: '西安'
        }
      ]
    }
  },
  watch: {
    selectValue (val) {
      this.$alert({
        message: `city:${val.city}，id:${val.id}`,
        onShow: () => {},
        onHide: () => {}
      })
    }
  },
  methods: {}
}
</script>
<style>
</style>
