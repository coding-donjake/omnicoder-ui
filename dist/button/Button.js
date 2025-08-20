// src/components/button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("button", { className: classNames.join(" "), type, disabled, onClick, children: [
    /* @__PURE__ */ jsx("div", { className: "omnicoder-ui-button-base-icon", children: icon }),
    /* @__PURE__ */ jsx("div", { className: "omnicoder-ui-button-base-content", children })
  ] });
};
var Button_default = Button;
export {
  Button_default as default
};
