"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
});
Object.defineProperty(exports, "Section", {
  enumerable: true,
  get: function get() {
    return _Section.default;
  }
});
require("./$layout.js");
var _Section = _interopRequireDefault(require("./Section"));
var _Container = _interopRequireDefault(require("./Container"));
var _createStyle = _interopRequireDefault(require("../libs/createStyle.js"));
(0, _createStyle.default)("\n\n    body{\n        display: flex;\n        flex-direction: column;\n        min-height: 100vh;\n        margin: 0;\n        padding: 0;\n    }\n\n    #root{\n        display: flex;\n        flex-direction: column;\n        min-height: 100vh;\n    }\n\n    main{\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n    }\n\n    trds-stack{\n        display: grid;\n        gap: var(--space--m);\n        align-content: start;\n    }\n\n    trds-grid{\n        display: flex;\n        flex-wrap: wrap;\n        gap: var(--space--xxl);\n        row-gap: var(--space--xl);\n    }\n\n    .boxes-layout{\n        gap: var(--space--m);\n        row-gap: var(--space--m);\n    }\n\n    .auto-width-layout{\n        gap: var(--space--s);\n        row-gap: var(--space--s);\n        align-items: center;\n    }\n\n    trds-grid > *{\n        flex:1 1 400px;\n    }\n\n    .auto-width-layout > *{\n        flex: 0 1 auto;\n    }\n\n    trds-card{\n        background-color: var(--color--secondary-bg);\n        display: flex;\n        flex-direction: column;\n    }\n\n    trds-card_media{\n        display: block;\n    }\n\n    trds-card_body{\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        padding: var(--space--l);\n    }\n\n    trds-card_footer{\n        display: block;\n        padding: var(--space--l);\n        padding-top: 0;\n    }\n\n");