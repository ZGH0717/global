import Loading from "./main";

/* istanbul ignore next */
Loading.install = function(Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;
