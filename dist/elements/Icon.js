"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = require("react");
var _createStyle = _interopRequireDefault(require("../libs/createStyle"));
var _excluded = ["icon"];
(0, _createStyle.default)("\n\n    i{\n        display: block;\n        width: 1em;\n        height: 1em;\n        background: currentColor;\n        -webkit-mask-size: contain;\n        mask-size: contain;\n        -webkit-mask-repeat: no-repeat;\n        mask-repeat: no-repeat;\n        -webkit-mask-position: center center;\n        mask-position: center center;\n        -webkit-mask-image: var(--icon);\n        mask-image: var(--icon);\n    }\n\n");
function Icon(_ref) {
  var icon = _ref.icon,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var IconElement = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    IconElement.current.style.setProperty('--icon', "url(\"https://trds-icons.storage.googleapis.com/".concat(icon, ".svg\")"));
  }, [icon]);
  return /*#__PURE__*/React.createElement("i", Object.assign({
    ref: IconElement
  }, rest));
}