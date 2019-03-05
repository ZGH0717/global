import Vue from 'vue';
import Main from './main.vue';

var AlertConstructor = Vue.extend(Main);
var instance;
var Alert = function (options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  if (instance) {
    for (var i in options) {
      instance.vm[i] = options[i]
    }
    instance.vm.visible = true;
    return;
  }
  instance = new AlertConstructor({
    data: options
  });
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  Alert.close = function () {
    instance.vm.visible = false;
  };
  return instance.vm;
};

export default Alert;
