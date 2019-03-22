<template>
  <div>
    <label
      disabled="disabled"
      class="global-checkbox"
      v-for="(item, index) in items"
      :key="item[valueName]"
      @click="selectHandle(index, item.checked)"
      :class="['global-checkbox-' + type, item.checked ? 'checked' : '']"
    >
      <i class="iconfont" v-html="iconfont"></i>
      {{ item[keyName] }}
    </label>
  </div>
</template>

<script>
export default {
  name: "GlobalCheckbox",
  props: {
    type: {
      type: String,
      default: "button"
    },

    iconfont: {
      type: String,
      default: ""
    },
    valueName: {
      type: String,
      default: "value"
    },
    keyName: {
      type: String,
      default: "name"
    },
    value: {
      default() {
        return [
          {
            value: "1",
            name: "name1"
          }
        ];
      }
    },
    list: {
      default() {
        return [
          {
            value: "1",
            name: "name1"
          },
          {
            value: "2",
            name: "name2"
          }
        ];
      }
    }
  },
  data() {
    return {
      selectValue: this.value,
      items: this.list
    };
  },
  watch: {
    selectValue(val) {
      this.$emit("input", val);
    },
    value() {
      this.selectValue = this.value;
    }
  },
  mounted() {
    if (this.selectValue.length > 0) {
      let newItems = [];
      this.selectValue.forEach(val => {
        this.items.forEach(item => {
          item.checked = item[this.valueName] === val[this.valueName];
          newItems.push(item);
        });
      });
      this.items = newItems;
    }
  },
  methods: {
    selectHandle(index, checked) {
      let isCheck = !checked;
      let item = Object.assign({}, this.items[index], { checked: isCheck });
      this.$set(this.items, index, item);
      this.selectValue = this.items.filter(val => {
        return val.checked === 1;
      });
    }
  }
};
</script>
