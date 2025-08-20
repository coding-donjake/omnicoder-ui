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
var Card = ({
  cls = "",
  variant = "primary",
  headless = false,
  title,
  footless = false,
  footer,
  children
}) => {
  const classNames = ["omnicoder-ui-card", "omnicoder-ui-card-base", `omnicoder-ui-card-base-variant-${variant}`, cls];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: classNames.join(" "), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `omnicoder-ui-card-base-variant-${variant}-header`, children: !headless ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `omnicoder-ui-card-base-variant-${variant}-header-title`, children: title }) : null }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `omnicoder-ui-card-base-variant-${variant}-content`, children }),
    !footless ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `omnicoder-ui-card-base-variant-${variant}-footer`, children: footer }) : null
  ] });
};
var Card_default = Card;
