import NoticeBar from "./main";

/* istanbul ignore next */
NoticeBar.install = function(Vue) {
  Vue.component(NoticeBar.name, NoticeBar);
};

export default NoticeBar;
