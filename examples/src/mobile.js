import Vue from "vue";
import VueRouter from "vue-router";
import MobileApp from "./MobileApp";
import registerRoute from "./router.config";
import navConfig from "./nav.config";
import GlobalVue from "src/index";
import isMobile from "./is-mobile.js";
import "packages/global-css/src/index.less";

import DemoList from "./components/demo-list.vue";

Vue.use(GlobalVue);
Vue.use(VueRouter);
const isProduction = process.env.NODE_ENV === "production";
const routesConfig = registerRoute(navConfig, true);
routesConfig.push({
  path: "/",
  component: DemoList
});
routesConfig.push({
  path: "*",
  redirect: "/"
});
const router = new VueRouter({
  base: isProduction ? "/" : __dirname,
  routes: routesConfig
});
let to = localStorage.getItem("to");
router.beforeEach((route, { path }, next) => {
  if (route.path !== "/") {
    window.scrollTo(0, 0);
  }
  if (to !== path && !isMobile) {
    to = path;
    localStorage.setItem("to", path);
    window.top.location.href = `/#${route.path}`;
  }

  // const pathname = isProduction ? "/" : "/";
  // if (!isMobile) {
  //   window.location.replace(pathname)
  //   return
  // }
  document.title = route.meta.title || document.title;
  next();
});
/* eslint-disable no-new */
new Vue({
  el: "#app-container",
  router,
  components: { MobileApp },
  template: "<MobileApp/>"
});
