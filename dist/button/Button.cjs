"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/button/Button.tsx
var Button_exports = {};
__export(Button_exports, {
  default: () => Button_default
});
module.exports = __toCommonJS(Button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  cls = "",
  variant = "primary",
  color = "primary",
  type = "button",
  icon = null,
  children,
  disabled,
  onClick = () => null
}) => {
  const classNames = [
    "omnicoder-ui-button",
    "omnicoder-ui-button-base",
    `omnicoder-ui-button-base-variant-${variant}`,
    `omnicoder-ui-button-base-color-${color} ${cls}`,
    cls
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: classNames.join(" "), type, disabled, onClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnicoder-ui-button-base-icon", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnicoder-ui-button-base-content", children })
  ] });
};
var Button_default = Button;
