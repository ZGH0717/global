import Toggle from "./main";

/* istanbul ignore next */
Toggle.install = function(Vue) {
  Vue.component(Toggle.name, Toggle);
};

export default Toggle;
