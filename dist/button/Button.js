// src/components/button/Button.tsx
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `omnicoder-ui-button omnicoder-ui-button-base omnicoder-ui-button-base-variant-${finalConfig.variant} omnicoder-ui-button-base-color-${finalConfig.color} ${alignContent} ${flexDirection} ${cls}`,
      type,
      disabled,
      onClick,
      children: [
        icon ? loading ? loadingIcon ? /* @__PURE__ */ jsx("div", { className: "omnicoder-ui-button-base-icon omnicoder-ui-icon-spinner", children: loadingIcon }) : /* @__PURE__ */ jsx("div", { className: "omnicoder-ui-button-base-icon omnicoder-ui-icon-spinner", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faSpinner }) }) : /* @__PURE__ */ jsx("div", { className: "omnicoder-ui-button-base-icon", children: icon }) : null,
        /* @__PURE__ */ jsx("div", { className: `flex ${alignContent} ${flexDirection} ${finalConfig.edgeIcon ? "flex-1" : ""}`, children })
      ]
    }
  );
};
var Button_default = Button;
export {
  Button_default as default
};
