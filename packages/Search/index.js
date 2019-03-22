import Search from "./main";

/* istanbul ignore next */
Search.install = function(Vue) {
  Vue.component(Search.name, Search);
};

export default Search;
