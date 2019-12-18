<template>
  <div class="h100 w100">
    <hua-head :title="$route.meta.title"></hua-head>
    <div class="common-top mainBox fs-14 lh1-5">
      <div class="mb-10">
        默认
        <hua-Avatar :image="image" />
      </div>

      <div class="mb-10">
        圆角 is-circle false
        <hua-Avatar :image="image" :is-circle="false" />
      </div>

      <div class="mb-10">
        size 宽高相同
        <hua-Avatar :image="image" size="100px" />
      </div>

      <div class="mb-10">
        宽高单独设置 width height
        <hua-Avatar
          :image="image"
          :is-circle="false"
          width="200px"
          height="100px"
        />
      </div>

      <div>
        倒角 radius
        <hua-Avatar :image="image" radius="10" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../../packages/Avatar/main";

export default {
  components: { Avatar },
  name: "avatar-md",
  data() {
    return {
      image:
        "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3d85fbc3942f07085f052d06d11fdfa4/5fdf8db1cb134954b37001e85c4e9258d0094ad4.jpg"
    };
  }
};
</script>
