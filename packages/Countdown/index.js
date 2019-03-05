import Countdown from './main'

/* istanbul ignore next */
Countdown.install = function (Vue) {
  Vue.component(Countdown.name, Countdown)
}

export default Countdown
