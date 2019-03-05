<template>
  <div>
    <label disabled="disabled" class="i-radio" v-for="(item,index) in items" :key="item[valueName]" @click="selectValue=item"
         :class="['i-radio-'+type,activeIndex===index?'checked':'']">
      <i class="iconfont" v-html="iconfont"></i>
      {{item[keyName]}}
    </label>
  </div>

</template>

<script>
  export default {
    name: 'IRadio',
    props: {
      iconfont:{
        type: String,
        default: 'button'
      },
      type: {
        type: String,
        default: 'button'
      },
      valueName: {
        type: String,
        default: 'value'
      },
      keyName: {
        type: String,
        default: 'name'
      },
      value: {
        default() {
          return {
            value: '1',
            name: '厦门'
          }
        }
      },
      list: {
        default() {
          return [{
            value: '1',
            name: '厦门'
          }, {
            value: '2',
            name: '广州'
          }]
        }
      }
    },
    data() {
      return {
        selectValue: this.value,
        items: this.list
      }
    },
    computed:{
      activeIndex(){
        let idx = -1;
        this.items.forEach((item, index) => {
          if (item[this.valueName] == this.selectValue[this.valueName]) {
            idx = index;
            return;
          }
        })
        return idx
      }
    },
    watch: {
      selectValue(val) {
        this.$emit('input', val);
      },
      value() {
        this.selectValue = this.value;
      }
    }
  }
</script>
