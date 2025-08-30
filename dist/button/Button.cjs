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
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");
var import_react_fontawesome = require("@fortawesome/react-fontawesome");
var import_jsx_runtime = require("react/jsx-runtime");
var defaultButtonConfig = {
  variant: "primary",
  color: "primary",
  edgeIcon: false,
  iconPosition: "left",
  alignContent: "left"
};
var Button = ({
  cls = "",
  type = "button",
  icon,
  loading,
  loadingIcon,
  disabled,
  children,
  onClick,
  config
}) => {
  const finalConfig = { ...defaultButtonConfig, ...config };
  let flexDirection = void 0;
  if (finalConfig.iconPosition == "left") flexDirection = "flex-row";
  else if (finalConfig.iconPosition == "right") flexDirection = "flex-row-reverse";
  let alignContent = void 0;
  if (finalConfig.alignContent == "left") alignContent = flexDirection == "flex-row" ? "justify-start" : "justify-end";
  else if (finalConfig.alignContent == "center") alignContent = "justify-center";
  else if (finalConfig.alignContent == "right")
    alignContent = flexDirection == "flex-row" ? "justify-end" : "justify-start";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      className: `omnicoder-ui-button omnicoder-ui-button-base omnicoder-ui-button-base-variant-${finalConfig.variant} omnicoder-ui-button-base-color-${finalConfig.color} ${alignContent} ${flexDirection} ${cls}`,
      type,
      disabled,
      onClick,
      children: [
        icon ? loading ? loadingIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnicoder-ui-button-base-icon omnicoder-ui-icon-spinner", children: loadingIcon }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnicoder-ui-button-base-icon omnicoder-ui-icon-spinner", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faSpinner }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnicoder-ui-button-base-icon", children: icon }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `flex ${alignContent} ${flexDirection} ${finalConfig.edgeIcon ? "flex-1" : ""}`, children })
      ]
    }
  );
};
var Button_default = Button;
