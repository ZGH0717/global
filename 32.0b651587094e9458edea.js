webpackJsonp([32],{"./examples/pages/collapse.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./examples/pages/collapse.vue\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ var collapse = ({\n  name: "alert-md",\n  data: function data() {\n    return {\n      taggleActive: false\n    };\n  },\n\n  methods: {\n    showAlert: function showAlert() {\n      var _this = this;\n\n      this.$alert.show({\n        message: "\\u70B9\\u4E86" + this.n + "\\u6B21",\n        onShow: function onShow() {\n          console.log(_this);\n          _this.n++;\n        },\n        onHide: function onHide() {\n          _this.$alert.close();\n        }\n      });\n    }\n  }\n});\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4cc27d97","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./examples/pages/collapse.vue\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"h100 w100"},[_c(\'global-head\',{attrs:{"title":_vm.$route.meta.title}}),_vm._v(" "),_c(\'div\',{staticClass:"common-top mainBox text-center "},_vm._l((4),function(i){return _c(\'global-collapse\',{key:i},[_c(\'span\',{attrs:{"slot":"title"},slot:"title"},[_vm._v("\\n        订单提交后能否取消订单或修改信息？\\n      ")]),_vm._v(" "),_c(\'div\',{staticClass:"bg-f pd-15 fs-12 color-3",attrs:{"slot":"content"},slot:"content"},[_vm._v("\\n        下单支付后，订单提交至海关申报及纳税，客户将不能修改订单信息（收货地址、电话等），也不能取消订单，请知晓并谅解。\\n      ")])])}),1)],1)}\nvar staticRenderFns = []\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ var pages_collapse = (esExports);\n// CONCATENATED MODULE: ./examples/pages/collapse.vue\nfunction injectStyle (ssrContext) {\n  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\\"omit\\":1,\\"remove\\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\\"sourceMap\\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\\"vue\\":true,\\"id\\":\\"data-v-4cc27d97\\",\\"scoped\\":false,\\"hasInlineConfig\\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./examples/pages/collapse.vue")\n}\nvar normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  collapse,\n  pages_collapse,\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\n\n/* harmony default export */ var examples_pages_collapse = __webpack_exports__["default"] = (Component.exports);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leGFtcGxlcy9wYWdlcy9jb2xsYXBzZS52dWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29sbGFwc2UudnVlPzM4YTUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvcGFnZXMvY29sbGFwc2UudnVlPzBjZDgiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvcGFnZXMvY29sbGFwc2UudnVlPzY5YWYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaDEwMCB3MTAwXCI+XG4gICAgPGdsb2JhbC1oZWFkIDp0aXRsZT1cIiRyb3V0ZS5tZXRhLnRpdGxlXCI+PC9nbG9iYWwtaGVhZD5cbiAgICA8ZGl2IGNsYXNzPVwiY29tbW9uLXRvcCBtYWluQm94IHRleHQtY2VudGVyIFwiPlxuICAgICAgPGdsb2JhbC1jb2xsYXBzZSB2LWZvcj1cImkgaW4gNFwiIDprZXk9XCJpXCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJ0aXRsZVwiPlxuICAgICAgICAgIOiuouWNleaPkOS6pOWQjuiDveWQpuWPlua2iOiuouWNleaIluS/ruaUueS/oeaBr++8n1xuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIiBjbGFzcz1cImJnLWYgcGQtMTUgZnMtMTIgY29sb3ItM1wiPlxuICAgICAgICAgIOS4i+WNleaUr+S7mOWQju+8jOiuouWNleaPkOS6pOiHs+a1t+WFs+eUs+aKpeWPiue6s+eoju+8jOWuouaIt+WwhuS4jeiDveS/ruaUueiuouWNleS/oeaBr++8iOaUtui0p+WcsOWdgOOAgeeUteivneetie+8ie+8jOS5n+S4jeiDveWPlua2iOiuouWNle+8jOivt+efpeaZk+W5tuiwheino+OAglxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZ2xvYmFsLWNvbGxhcHNlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiYWxlcnQtbWRcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnZ2xlQWN0aXZlOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93QWxlcnQoKSB7XG4gICAgICB0aGlzLiRhbGVydC5zaG93KHtcbiAgICAgICAgbWVzc2FnZTogYOeCueS6hiR7dGhpcy5ufeasoWAsXG4gICAgICAgIG9uU2hvdzogKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgIHRoaXMubisrO1xuICAgICAgICB9LFxuICAgICAgICBvbkhpZGU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLiRhbGVydC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZT5cbi5idG4xIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwcHggMTAwMHB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb2xsYXBzZS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoMTAwIHcxMDBcIn0sW19jKCdnbG9iYWwtaGVhZCcse2F0dHJzOntcInRpdGxlXCI6X3ZtLiRyb3V0ZS5tZXRhLnRpdGxlfX0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29tbW9uLXRvcCBtYWluQm94IHRleHQtY2VudGVyIFwifSxfdm0uX2woKDQpLGZ1bmN0aW9uKGkpe3JldHVybiBfYygnZ2xvYmFsLWNvbGxhcHNlJyx7a2V5Oml9LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcInRpdGxlXCJ9LHNsb3Q6XCJ0aXRsZVwifSxbX3ZtLl92KFwiXFxuICAgICAgICDorqLljZXmj5DkuqTlkI7og73lkKblj5bmtojorqLljZXmiJbkv67mlLnkv6Hmga/vvJ9cXG4gICAgICBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImJnLWYgcGQtMTUgZnMtMTIgY29sb3ItM1wiLGF0dHJzOntcInNsb3RcIjpcImNvbnRlbnRcIn0sc2xvdDpcImNvbnRlbnRcIn0sW192bS5fdihcIlxcbiAgICAgICAg5LiL5Y2V5pSv5LuY5ZCO77yM6K6i5Y2V5o+Q5Lqk6Iez5rW35YWz55Sz5oql5Y+K57qz56iO77yM5a6i5oi35bCG5LiN6IO95L+u5pS56K6i5Y2V5L+h5oGv77yI5pS26LSn5Zyw5Z2A44CB55S16K+d562J77yJ77yM5Lmf5LiN6IO95Y+W5raI6K6i5Y2V77yM6K+355+l5pmT5bm26LCF6Kej44CCXFxuICAgICAgXCIpXSldKX0pLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGNjMjdkOTdcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwidHJhbnNmb3JtVG9SZXF1aXJlXCI6e1widmlkZW9cIjpbXCJzcmNcIixcInBvc3RlclwiXSxcInNvdXJjZVwiOlwic3JjXCIsXCJpbWdcIjpcInNyY1wiLFwiaW1hZ2VcIjpcInhsaW5rOmhyZWZcIn0sXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3BhZ2VzL2NvbGxhcHNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsImZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00Y2MyN2Q5N1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY29sbGFwc2UudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29sbGFwc2UudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jb2xsYXBzZS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRjYzI3ZDk3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwidHJhbnNmb3JtVG9SZXF1aXJlXFxcIjp7XFxcInZpZGVvXFxcIjpbXFxcInNyY1xcXCIsXFxcInBvc3RlclxcXCJdLFxcXCJzb3VyY2VcXFwiOlxcXCJzcmNcXFwiLFxcXCJpbWdcXFwiOlxcXCJzcmNcXFwiLFxcXCJpbWFnZVxcXCI6XFxcInhsaW5rOmhyZWZcXFwifSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY29sbGFwc2UudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2V4YW1wbGVzL3BhZ2VzL2NvbGxhcHNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQVpBO0FBUEE7O0FDakJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./examples/pages/collapse.vue\n')},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-4cc27d97","scoped":false,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./examples/pages/collapse.vue':function(module,exports){eval('// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRjYzI3ZDk3XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZXhhbXBsZXMvcGFnZXMvY29sbGFwc2UudnVlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvcGFnZXMvY29sbGFwc2UudnVlPzU1NGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGNjMjdkOTdcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9wYWdlcy9jb2xsYXBzZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJzb3VyY2VNYXBcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00Y2MyN2Q5N1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2V4YW1wbGVzL3BhZ2VzL2NvbGxhcHNlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMyIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-4cc27d97","scoped":false,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./examples/pages/collapse.vue\n')}});