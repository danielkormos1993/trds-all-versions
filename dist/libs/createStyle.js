"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var createStyle = function createStyle(css) {
  var Style = document.createElement('style');
  Style.textContent = css;
  document.head.appendChild(Style);
};
var _default = createStyle;
exports.default = _default;