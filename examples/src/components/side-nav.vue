<template>
  <div class="side-nav mainBox">
    <ul>
      <li class="nav-item" v-for="(item, itemIndex) in data" :key="itemIndex">
        <a
          href="javascript:void(0)"
          class="bold"
          v-if="!item.path"
          @click="handleTitleClick(item)"
          >{{ item.name }}</a
        >
        <router-link
          v-else
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name"
        />
        <ul class="pure-menu-list sub-nav" v-if="item.children">
          <li
            class="nav-item"
            v-for="(navItem, index) in item.children"
            :key="index"
          >
            <router-link
              active-class="active"
              :to="base + navItem.path"
              v-text="navItem.title || navItem.name"
            />
          </li>
        </ul>
        <template v-if="item.groups">
          <div
            class="nav-group"
            v-for="(group, groupIndex) in item.groups"
            :key="groupIndex"
          >
            <div class="nav-group__title">{{ group.groupName }}</div>
            <ul class="pure-menu-list">
              <template v-for="(navItem, navItemIndex) in group.list">
                <li
                  class="nav-item"
                  v-if="!navItem.disabled"
                  :key="navItemIndex"
                >
                  <router-link
                    active-class="active"
                    :to="base + navItem.path"
                    v-text="navItem.title"
                  />
                </li>
              </template>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    base: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleTitleClick (item) {
      const firstGroup = item.groups && item.groups[0]
      if (firstGroup && firstGroup.list && firstGroup.list.length !== 0) {
        return this.$router.replace(this.base + firstGroup.list[0].path)
      }
    }
  }
}
</script>

<style lang="less">

.side-nav {
  flex: 0 0 250px;
  box-sizing: border-box;
  padding: 55px 0;
  border-right: 1px solid #e5e5e5;
  width: 250px;
  opacity: 0.6;
  transition: all 1s;
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: transparent;
  }
  &:hover {
    opacity: 1;
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
    }
  }
  li {
    list-style: none;
  }
  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  .nav-item {
    a {
      font-size: 16px;
      color: #333;
      line-height: 40px;
      height: 40px;
      margin: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: all 0.3s;
      padding: 0 20px;

      &.active {
        color: #3388ff;
        background-color: #f2f2f2;
        font-weight: bold;
      }
    }
    .nav-item {
      a {
        display: block;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-left: 44px;
        &:hover {
          color: #3388ff;
          background-color: #f2f2f2;
        }
      }
    }
  }
  .nav-group__title {
    font-size: 12px;
    color: #666;
    padding-left: 28px;
    line-height: 26px;
    margin-top: 10px;
  }
}
</style>
