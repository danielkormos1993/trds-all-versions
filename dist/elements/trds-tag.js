"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
require("../layout/$layout.js");
var _createStyle = _interopRequireDefault(require("../libs/createStyle.js"));
require("../typhography/$typhography.js");
(0, _createStyle.default)("\n\ntrds-tag{\n    background-color: var(--color--accent);\n    border-radius: 50px;\n    box-sizing: border-box;\n    padding: var(--space--xs) var(--space--s);\n    font-size: var(--size--xs);\n    font-weight: bold;\n}\n\ntrds-tag.outline{\n    box-shadow: inset 0 0 0 2px currentColor;\n    background-color: transparent;\n}\n\n");