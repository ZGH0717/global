<template>
  <div class="mobile-nav-group">
    <div
      class="mobile-nav-group__title mobile-nav-group__basetitle borderB"
      :class="{
        'mobile-nav-group__title--open': isOpen
      }"
      @click="isOpen = true"
    >
      {{ group.groupName }}
    </div>
    <div
      class="mobile-nav-group__list-wrapper"
      :class="{ 'mobile-nav-group__list-wrapper--open': isOpen }"
    >
      <ul
        class="mobile-nav-group__list"
        :class="{ 'mobile-nav-group__list--open': isOpen }"
      >
        <template v-for="(navItem, navItemIndex) in group.list">
          <li
            class="mobile-nav-group__title col-xs-4 text-center fs-12 color-6 borderB borderR"
            v-if="!navItem.disabled"
            :key="navItemIndex"
          >
            <router-link active-class="active" :to="base + navItem.path">
              <p class="row1 pl-10 pr-10">
                {{ navItem.title }}
              </p>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      default: () => {
        return [];
      }
    },
    base: String
  },
  data() {
    return {
      isOpen: true
    };
  }
};
</script>

<style lang="postcss">
@component-namespace mobile {
  @b nav-group {
    border-radius: 2px;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);

    @e basetitle {
      padding-left: 20px;
    }

    @e title {
      line-height: 56px;
      position: relative;
      user-select: none;

      @m open {
        color: #38f;
      }

      a {
        color: #333;
        display: block;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        &:active {
          background: #ececec;
        }

        > p {
          /*border-top: 1px solid #e5e5e5;*/
        }
      }
    }

    @e list-wrapper {
      height: 0;
      overflow: hidden;

      @m open {
        height: auto;
      }
    }

    @e list {
      transform: translateY(-50%);
      transition: transform 0.2s ease-out;

      @m open {
        transform: translateY(0);
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
  }
}
</style>
