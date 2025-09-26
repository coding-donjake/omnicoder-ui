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

// src/components/screen/Screen.tsx
var Screen_exports = {};
__export(Screen_exports, {
  default: () => Screen_default
});
module.exports = __toCommonJS(Screen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var Screen = ({ cls = "", theme = "light", children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `omnicoder-ui-screen omnicoder-ui-screen-base omnicoder-ui-theme-${theme} ${cls}`, children });
};
var Screen_default = Screen;
