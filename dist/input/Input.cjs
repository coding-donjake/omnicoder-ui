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

// src/components/input/Input.tsx
var Input_exports = {};
__export(Input_exports, {
  default: () => Input_default
});
module.exports = __toCommonJS(Input_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var Input = ({
  cls,
  variant,
  id,
  type = "text",
  label,
  placeholder,
  min,
  max,
  value,
  icon,
  loadingIcon,
  required,
  readOnly,
  loading,
  disabled,
  onChange
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `omnicoder-ui-input omnicoder-ui-input-base omnicoder-ui-input-base-variant-${variant} ${cls}`, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { htmlFor: id, children: label }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "input",
      {
        id,
        type,
        placeholder,
        min,
        max,
        value,
        required,
        readOnly,
        disabled,
        onChange
      }
    )
  ] });
};
var Input_default = Input;
