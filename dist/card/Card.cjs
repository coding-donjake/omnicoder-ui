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

// src/components/card/Card.tsx
var Card_exports = {};
__export(Card_exports, {
  default: () => Card_default
});
module.exports = __toCommonJS(Card_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var defaultCardHeader = {
  headless: false,
  title: null,
  component: null
};
var Card = ({ cls = "", variant = "primary", header, footer, children }) => {
  const finalheader = { ...defaultCardHeader, ...header };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `omnicoder-ui-card omnicoder-ui-card-base omnicoder-ui-card-base-variant-${variant} ${cls}`, children: [
    !finalheader.headless ? finalheader.component ? finalheader.component : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `omnicoder-ui-card-base-variant-${variant}-header`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `omnicoder-ui-card-base-variant-${variant}-header-title`, children: finalheader.title }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `omnicoder-ui-card-base-variant-${variant}-content`, children }),
    footer ? footer : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
  ] });
};
var Card_default = Card;
