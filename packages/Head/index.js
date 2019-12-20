import Head from './main'

/* istanbul ignore next */
Head.install = function (Vue) {
  Vue.component(Head.name, Head)
}

export default Head
