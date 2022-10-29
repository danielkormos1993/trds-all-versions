"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Section;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
require("../libs/createStyle");
var _Container = _interopRequireDefault(require("./Container.js"));
var _excluded = ["children"];
createStyle("\n\n    section{\n        display: block;\n        padding: var(--space--xxl) 0;\n    }\n\n    section:last-child{\n        flex: 1;\n    }\n\n");
function Section(_ref) {
  var children = _ref.children,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/React.createElement("section", rest, /*#__PURE__*/React.createElement(_Container.default, null, children));
}