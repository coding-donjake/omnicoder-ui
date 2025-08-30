// src/components/card/Card.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Card = ({ cls = "", variant = "primary", header, footer, children }) => {
  const classNames = ["omnicoder-ui-card", "omnicoder-ui-card-base", `omnicoder-ui-card-base-variant-${variant}`, cls];
  return /* @__PURE__ */ jsxs("div", { className: classNames.join(" "), children: [
    !header.headless ? header.component ? header.component : /* @__PURE__ */ jsx("div", { className: `omnicoder-ui-card-base-variant-${variant}-header`, children: /* @__PURE__ */ jsx("div", { className: `omnicoder-ui-card-base-variant-${variant}-header-title`, children: header.title }) }) : /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsx("div", { className: `omnicoder-ui-card-base-variant-${variant}-content`, children }),
    footer ? footer : /* @__PURE__ */ jsx("div", {})
  ] });
};
var Card_default = Card;
export {
  Card_default as default
};
