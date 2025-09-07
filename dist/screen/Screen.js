// src/components/screen/Screen.tsx
import { jsx } from "react/jsx-runtime";
var Screen = ({ cls = "", theme = "light", children }) => {
  return /* @__PURE__ */ jsx("div", { className: `omnicoder-ui-screen omnicoder-ui-screen-base omnicoder-ui-theme-${theme} ${cls}`, children: /* @__PURE__ */ jsx("div", { className: "omnicoder-ui-screen-base-content", children: /* @__PURE__ */ jsx("div", { className: "omnicoder-ui-screen-base-content-wrapper", children }) }) });
};
var Screen_default = Screen;
export {
  Screen_default as default
};
