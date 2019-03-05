<template>
  <button :class="['i-tag',type]">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "ITag",
    props:{

      type:{
        type:String,
        default:'tag-default'
      }
    }
  }
</script>
