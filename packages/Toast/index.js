import Vue from 'vue'
import Main from './main.vue'

var ToastConstructor = Vue.extend(Main)
var instance = null
var Toast = function (options, type = '') {
  if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options,
      type: type
    }
  } else if (
    typeof options === 'object' &&
    typeof options.length !== 'number'
  ) {
    options = Object.assign(options, { type: type })
  }

  if (instance) {
    for (var i in options) {
      instance.vm[i] = options[i]
    }
    instance.vm._show()
    return
  }

  instance = new ToastConstructor({
    data: options
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm._show()
  instance.dom = instance.vm.$el
  Toast.close = function () {
    instance.vm.visible = false
  }
  return instance.vm
}

Toast.loading = function (options, type = 'loading') {
  Toast(options, type)
}

Toast.success = function (options, type = 'success') {
  Toast(options, type)
}

Toast.fail = function (options, type = 'fail') {
  Toast(options, type)
}
Toast.warning = function (options, type = 'warning') {
  Toast(options, type)
}

export default Toast
