<template>
  <div>
    <global-head :title="$route.meta.title"></global-head>
    <div class="common-top text-center color-red">
      <div class="relative mb-30" style="height:100px">
        <global-cell>默认类型</global-cell>

        <global-foot :menus="menus1"></global-foot>
      </div>

      <div class="relative mb-30" style="height:100px">
        <global-cell>type1类型</global-cell>

        <global-foot type="type1" :menus="menus"></global-foot>
      </div>
      <div class="relative mb-30" style="height:100px">
        <global-cell>type2类型</global-cell>
        <global-foot type="type2" :menus="menus"></global-foot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      menus: [
        {
          to: "",
          name: "推荐",
          iconfont: "&#xe756;"
        },
        {
          to: "#",
          name: "分类",
          iconfont: "&#xe696;"
        },
        {
          to: "#1",
          name: "活动",
          iconfont: "&#xe6db;",
          middleImg:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAYAAADNAiUZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzNkZENjNFRkMxNzExRTc5REJCRkUwMTgzQ0JFMjFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzNkZENjNGRkMxNzExRTc5REJCRkUwMTgzQ0JFMjFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzM2RkQ2M0NGQzE3MTFFNzlEQkJGRTAxODNDQkUyMUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzM2RkQ2M0RGQzE3MTFFNzlEQkJGRTAxODNDQkUyMUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Lq63AAAACrUlEQVR42ryWW4hNURjHz95txriMcXuZMYwyhZjSyOXBDBkvLpkXMw+TeXCJvJCUIoWSe8YLGi9KXuTNiYcz5RKKBg9uNVFHShm3oRwOM/h99a1abfvsvTax6re/vdftv9a3vrXW9u4vbMyQamAPtENZ5t+kS7Bv9o3rPR6iE/l4AqMy/yctCHgcUsFOOABf4Ad8tiqOBC9Fxz/VmjZDoA1OQpfM9AMvlRGdyvd4eBPXO+5yHsmDxqZ3mLE+j/KI8mM62z54D+vT+I/Ot0MnhOOjXx4i+jXkii7YBgPQA2PgDKxIobsbtuCFYihf3JwJQuswGjaAuKEOxPWL4Coch2zM7HyNfOknD/XkTdDYKDKAQVPXD7WtVXtRBSVdU7dMhaExs5sPBQ3Ees3rU9E1dsUg1PCV2iYrbwpUaAffY0Q/wUN9Fy8Ng8cgM3xdStTTSM3q+j2FW7BOy3dYWyEqih+ZGeJWiYUG8mZG1fUj3lvhMkyzBA/D2RSBNFnFh0cVBhF5sibLYS5USVt4kfLU6YBxpZYjiGl4NyKvGubBDNOW2fTK1sKVvZarr8SNKHAceQMchOaYLSPruBfBbFJnLqLT9ZCQVNTtlNetIFtoEiyDOXKTIL4ySdhF9KjaHLToXvzt7EXsNGajHuqxon6CoGe5tDUsGBLfhHkrdzMDqPob0RHqwrw5rBNSzlqSPxatVJt3DLiPasuTRM31MxhRXnDpxErmbP5WonzAiBYcOvMdRcsSRCtMZ7c1oyWi0lq19xxFb6pdFbGPa/WUeu5bW+I8LLbqLYEj+n7CUfScLtNWRNotwVmYbnOOe/oLuh92auZL9UC1fm+GU67/SAg0W1HcrzdXnX5foH6bWatdsFrdWKOCd2BpnGCJQXTrZZHT6BfBZ/r7In+EmV8CDACAu7WST+IpkwAAAABJRU5ErkJggg=="
        },
        {
          to: "#2",
          name: "购物车",
          iconfont: "&#xe698;"
        },
        {
          to: "#3",
          name: "我的",
          iconfont: "&#xe6b8;"
        }
      ],
      menus1: [
        {
          to: "",
          name: "推荐",
          iconfont: "&#xe756;"
        },
        {
          to: "#",
          name: "分类",
          iconfont: "&#xe696;"
        },
        {
          to: "#2",
          name: "购物车",
          iconfont: "&#xe698;"
        },
        {
          to: "#3",
          name: "我的",
          iconfont: "&#xe6b8;"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
