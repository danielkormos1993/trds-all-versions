"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _createStyle = _interopRequireDefault(require("../libs/createStyle"));
(0, _createStyle.default)("\n\na{\n    transition: filter 0.25s ease-in-out;\n    color: inherit;\n    text-decoration: none;\n    display: block;\n}\n\na.text{\n    display: inline;\n    text-decoration: underline;\n    text-decoration-color: var(--color--primary);\n}\n\na:hover,\na:active,\na:focus{\n    filter: brightness(125%);\n}\n\n");