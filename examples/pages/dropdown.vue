<template>
  <div class="h100 w100">
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top mainBox fs-14 lh1-5">
      <div class="clearfix mt-30">
        <div>
          <div>
            触发方式 ： trigger===》click <br />
            位置： placement===》bottom-left
          </div>
          <global-dropdown
            ref="globalDropdown"
            class="middle ml-15 user-box"
            trigger="click"
            placement="bottom-left"
          >
            <global-avatar slot="dropdown-head" class="middle common-cursor" />
            <ul @click="$refs.globalDropdown && $refs.globalDropdown._hide()">
              <li class="user-info middle-box ">
                <div class="middle">
                  <p class="fs-12">当前登录账户</p>
                  <p class="mt-10 color-80 common-color font-blod">
                    1825****694
                  </p>
                </div>
              </li>
              <li class="link-a link-a__collect">
                <a href="javascript: void(0)">我的收藏</a>
              </li>
              <li class="clearfix exit-li">
                <button class="logout-btn" @click="logoutHandle">
                  退出
                </button>
              </li>
            </ul>
          </global-dropdown>
        </div>
        <div style="margin-top: 100px;">
          <div>
            触发方式 ： trigger===》hover <br />
            位置： placement===》bottom-right
          </div>
          <global-dropdown
            ref="globalDropdown"
            class="middle mr-15 user-box r"
            trigger="hover"
            placement="bottom-right"
          >
            <global-avatar slot="dropdown-head" class="middle common-cursor" />
            <ul @click="$refs.globalDropdown && $refs.globalDropdown._hide()">
              <li class="user-info middle-box ">
                <div class="middle">
                  <p class="fs-12">当前登录账户</p>
                  <p class="mt-10 color-80 common-color font-blod">
                    1825****694
                  </p>
                </div>
              </li>
              <li class="link-a link-a__collect">
                <a href="javascript:void(0)">我的收藏</a>
              </li>
              <li class="clearfix exit-li">
                <button class="logout-btn" @click="logoutHandle">
                  退出
                </button>
              </li>
            </ul>
          </global-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown-md",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    logoutHandle() {
      this.$alert("普通弹出提示");
    },
    showAlert1() {
      this.$alert({
        message: `点了${this.n}次`,
        onConfirm: () => {
          this.n++;
          console.log(this.n);
          this.$alert.close();
        },
        onHide: () => {
          console.log("关闭时触发");
        }
      });
    }
  }
};
</script>
<style lang="less">
.user-box {
  position: relative;
  line-height: 1;
  color: #ccc;
  .dropdown-box {
    .dropdown-content {
      border-radius: 3px;
      position: relative;
      margin-top: 14px;
      width: 150px;
      box-shadow: 0px 0px 36px 4px rgba(0, 0, 0, 0.1);
      .triangle {
        display: block;
        border-color: rgba(255, 240, 209, 1);
      }
      .user-info {
        height: 70px;
        background: rgba(255, 240, 209, 1);
        position: relative;
        z-index: 1;
        padding: 0 20px;
        border-radius: 3px 3px 0 0;
      }
      .link-a {
        font-size: 12px;
        padding: 0 10px;
        a {
          display: inline-block;
          padding: 15px 36px;
          border-bottom: 1px solid #f5f5f5;
          background-position: 10px center;
          background-repeat: no-repeat;
          font-size: 12px;
          color: #4d4d4d;
          font-weight: normal;
        }
        &.link-a__collect {
          a {
            background-image: url("/static/images/user/icon-collect.png");
            &.a-exact-active,
            &:hover {
              background-image: url("/static/images/user/icon-collect-active.png");
              color: red;
            }
          }
        }
      }
      .exit-li {
        padding: 5px 0;
        .logout-btn {
          float: right;
          display: inline-block;
          width: 62px;
          height: 27px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(204, 204, 204, 1);
          padding-left: 5px;
          box-sizing: content-box;
          background: url("/static/images/user/icon-exit.png") no-repeat 0
            center;
          &:hover {
            background-image: url("/static/images/user/icon-exit-active.png");
            color: red;
          }
        }
      }
    }
  }
}
</style>
