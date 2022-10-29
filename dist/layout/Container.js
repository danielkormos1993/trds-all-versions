"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Container;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
require("../libs/createStyle");
var _excluded = ["children"];
createStyle("\n\n    .container{\n        display: block;\n        width: 100%;\n        max-width: 1700px;\n        padding: 0 5%;\n        box-sizing: border-box;\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n");
function Container(_ref) {
  var children = _ref.children,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", Object.assign({
    className: "container"
  }, rest), children);
}