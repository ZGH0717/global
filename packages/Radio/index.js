import Radio from './main'

/* istanbul ignore next */
Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
};

export default Radio
