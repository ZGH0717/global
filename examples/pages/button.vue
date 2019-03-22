<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox text-center ">
      <div class="relative clearfix  pd-5 fs-12 color-6">
        <div
          class="bg-f mt-5 "
          v-for="(item, itemIndex) in list"
          :key="itemIndex"
        >
          <div class="pd-15">
            <div class="middle">
              <div><span class="bold color-0">type:</span>{{ item.type }}</div>
              <div><span class="bold color-0">size:</span>{{ item.size }}</div>
            </div>

            <div class="r">
              <global-button :size="item.size" :type="item.type"
                >确认</global-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert-md",
  data() {
    return {
      type: [
        "btn-default",
        "btn-primary-color",
        "btn-success-color",
        "btn-info-color",
        "btn-warning-color",
        "btn-danger-color",
        "btn-primary",
        "btn-success",
        "btn-info",
        "btn-warning",
        "btn-danger"
      ],
      size: ["btn-lg", "btn-sm", "btn-xs"]
    };
  },
  computed: {
    list() {
      let items = [];
      this.type.forEach(type => {
        this.size.forEach(size => {
          let item = { type, size };
          items.push(item);
        });
      });
      return items;
    }
  },
  methods: {
    showAlert() {
      this.$alert.show({
        message: `点了${this.n}次`,
        onShow: () => {
          console.log(this);
          this.n++;
        },
        onHide: () => {
          this.$alert.close();
        }
      });
    }
  }
};
</script>
<style>
.btn1 {
  box-shadow: inset 0 0px 1000px rgba(0, 0, 0, 0.125);
}
</style>
