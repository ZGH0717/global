export const uuid = _ => {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
};

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export const debounce = (func, wait, immediate) => {
  let timeout;

  return function() {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
  };
};
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
export const throttle = (func, wait, type) => {
  if (type === 1) {
    var previous = 0;
  } else if (type === 2) {
    var timeout;
  }

  return function() {
    var context = this;
    var args = arguments;
    if (type === 1) {
      var now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(function() {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
};
export const getScrollview = function(el) {
  // 拿到当前节点
  let currentNode = el;
  // 如果有节点，并且节点不等于html ,body 并且节点类型是元素节点
  while (
    currentNode &&
    currentNode.tagName !== "HTML" &&
    currentNode.tagName !== "BODY" &&
    currentNode.nodeType === 1
  ) {
    // 拿到节点的overflowy的属性
    let overflowY = document.defaultView.getComputedStyle(currentNode)
      .overflowY;
    // 如果此时属性是scroll或者atuo 就返回此节点
    if (overflowY === "scroll" || overflowY === "auto") {
      return currentNode;
    }
    // 否则就继续向父节点上找
    currentNode = currentNode.parentNode;
  }
  // 一但while语句为false的时候就直接返回window对像
  return window;
};
export const getQueryString = name => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
/**
 * 获取指定范围内随机数
 * @param lowerValue
 * @param upperValue
 * @returns {number}
 */
export const randomFrom = (lowerValue, upperValue) => {
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
};
export const isWX = (() => {
  const ua = navigator.userAgent.toLowerCase();
  return (
    !!ua.match(/MicroMessenger/i) &&
    ua.match(/MicroMessenger/i)[0] === "micromessenger"
  );
})();
