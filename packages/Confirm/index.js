import Vue from 'vue';
import Main from './main.vue';

var ConfirmConstructor = Vue.extend(Main);
var instance;
var defaults = {
  message: '消息',
  isMaskClick: false,
  visible: false,
  styles: {},
  onHide: function () {
  },
  onShow: function () {
  },
  content: '',
  isInput: false
};
var Confirm = function (options) {
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
  instance = new ConfirmConstructor({
    data: options
  });
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  Confirm.close = function () {
    instance.vm.visible = false;
    instance.vm.isInput=false
  };
  return instance.vm;
};
export default Confirm;
