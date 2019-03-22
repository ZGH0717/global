import PullRefresh from "./main";

/* istanbul ignore next */
PullRefresh.install = function(Vue) {
  Vue.component(PullRefresh.name, PullRefresh);
};

export default PullRefresh;
