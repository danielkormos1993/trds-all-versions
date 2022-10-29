"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
require("../layout/$layout.js");
var _createStyle = _interopRequireDefault(require("../libs/createStyle.js"));
(0, _createStyle.default)("\n\ninput,\nselect,\ntextarea{\n    display: block;\n    max-width: var(--element--max-width);\n    width: 100%;\n    background-color: var(--color--secondary-bg);\n    color: inherit;\n    font-size: inherit;\n    padding: var(--space--s);\n    border: none;\n    box-sizing: border-box;\n    font-family: inherit;\n    margin: 0;\n}\n\nselect{\n    font-weight: bold;\n    border-bottom: 2px solid var(--color--primary);\n}\n\ntextarea{\n    min-height: 150px;\n}\n\ninput[type=checkbox]{\n    width: var(--space--m);\n    height: var(--space--m);\n}\n\n");