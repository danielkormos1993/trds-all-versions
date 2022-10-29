"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
require("../layout/$layout.js");
var _createStyle = _interopRequireDefault(require("../libs/createStyle"));
require("./$typhography.js");
(0, _createStyle.default)("\n\nh1, h2, h3, h4, h5, h6, p{\n    margin: 0;\n    max-width: var(--element--max-width);\n}\n\n.variant--1{\n    text-transform: uppercase;\n    letter-spacing: .2em;\n    font-size: var(--size--m);\n    line-height: var(--size--m--line-height);\n}\n\nh1, .size--xxl{\n    font-size: var(--size--xxl);\n    line-height: var(--size--xxl--line-height);\n}\n\nh2, .size--xl{\n    font-size: var(--size--xl);\n    line-height: var(--size--xl--line-height);\n}\n\nh3, .size--l{\n    font-size: var(--size--l);\n    line-height: var(--size--l--line-height);\n}\n\nh4, .size--m{\n    font-size: var(--size--m);\n    line-height: var(--size--m--line-height);\n}\n\nh5, .size--s{\n    font-size: var(--size--s);\n    line-height: var(--size--s--line-height);\n}\n\nh6, .size--xs{\n    font-size: var(--size--xs);\n    line-height: var(--size--xs--line-height);\n}\n\n");