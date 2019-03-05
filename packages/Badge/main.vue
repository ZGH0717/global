<template>
  <div v-if="count!=-1" class="i-badge" :class="{'show-count':count>0}" :style="{top:top+'px',right:right+'px'}">
    {{count>0?count:''}}
  </div>
</template>

<script>
  export default {
    name: "IBadge",
    props:{
      count:{
        type:String,
        default:0
      },
      top:{
        type:String,
        default:'0'
      },
      right:{
        type:String,
        default:'0'
      }
    }
  }
</script>
