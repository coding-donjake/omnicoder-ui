// src/components/input/Input.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("div", { className: `omnicoder-ui-input omnicoder-ui-input-base omnicoder-ui-input-base-variant-${variant} ${cls}`, children: [
    label ? /* @__PURE__ */ jsx("label", { htmlFor: id, children: label }) : null,
    /* @__PURE__ */ jsx(
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
export {
  Input_default as default
};
