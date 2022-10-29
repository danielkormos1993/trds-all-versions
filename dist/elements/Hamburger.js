"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hamburger;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
require("../libs/createStyle");
var _excluded = ["isActive"];
createStyle("\n\n    .hamburger{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        width: 28px;\n        height: 17px;\n        cursor: pointer;\n    }\n\n    .hamburger div{\n        display: block;\n        height: 3px;\n        background-color: currentColor;\n        transition: transform .25s, opacity .25s;\n    }\n\n    .hamburger.active div:nth-of-type(1){\n        transform: rotate(45deg) translate(6px,4px);\n    }\n\n    .hamburger.active div:nth-of-type(2){\n        opacity: 0;\n    }\n\n    .hamburger.active div:nth-of-type(3){\n        transform: rotate(-45deg) translate(6px,-4px);\n    }\n\n");
function Hamburger(_ref) {
  var isActive = _ref.isActive,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", Object.assign({
    className: "hamburger ".concat(isActive ? 'active' : '')
  }, rest), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null));
}