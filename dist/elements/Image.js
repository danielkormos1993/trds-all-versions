"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = require("react");
require("../libs/createStyle");
var _excluded = ["className", "src", "alt"];
createStyle("\n\n    .image{\n        display: block;\n        width: 100%;\n        max-width: var(--element--max-width);\n        position: relative;\n        object-fit: contain;\n        object-position: center center;\n        --image-padding-bottom: 56.25%;\n    }\n\n    .image aspect-ratio-box{\n        padding-bottom: var(--image-padding-bottom);\n        display: block;\n        box-sizing: border-box;\n    }\n\n    .image img{\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        display: block;\n        object-fit: inherit;\n        object-position: inherit;\n    }\n\n");
function Image(_ref) {
  var className = _ref.className,
    src = _ref.src,
    alt = _ref.alt,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var ImageElement = (0, _react.useRef)();
  var _useEffect = (0, _react.useEffect)(false),
    _useEffect2 = (0, _slicedToArray2.default)(_useEffect, 2),
    isLoaded = _useEffect2[0],
    setIsLoaded = _useEffect2[1];
  (0, _react.useEffect)(function () {
    ImageElement.current.addEventListener('load', function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          setIsLoaded(true);
        });
      });
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", Object.assign({
    className: "image ".concat(className)
  }, rest), /*#__PURE__*/React.createElement("trds-loader", isLoaded && {
    'active': ''
  }), /*#__PURE__*/React.createElement("aspect-ratio-box", null), /*#__PURE__*/React.createElement("img", {
    ref: ImageElement,
    src: src,
    alt: alt
  }));
}