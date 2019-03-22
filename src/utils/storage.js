/**
 * 存储sessionStorage
 */
const setSessionStorage = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 */
const getSessionStorage = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};

/**
 * 删除sessionStorage
 */
const removeSessionStorage = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};
/**
 * 存储localStorage
 */
const setLocalStorage = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
const getLocalStorage = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
const removeLocalStorage = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
/**
 * 获取style样式
 */
const getStyle = (element, attr, NumberMode = "int") => {
  let target;
  // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
  if (attr === "scrollTop") {
    target = element.scrollTop;
  } else if (element.currentStyle) {
    target = element.currentStyle[attr];
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr];
  }
  // 在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode === "float" ? parseFloat(target) : parseInt(target);
};
/**
 * 处理ajax数据
 */
// const checkAjaxData = (res, Flag = 1) => {
//   if (res.data.code && res.data.code == 404) {
//     return res.data
//   }
//   let data = ''
//   if (Flag == 1) {
//     data = JSON.parse(decrypt(res.data))
//   }
//   return data
// }

export {
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  getStyle
};
