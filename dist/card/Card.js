// src/components/card/Card.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("div", { className: classNames.join(" "), children: [
    /* @__PURE__ */ jsx("div", { className: `omnicoder-ui-card-base-variant-${variant}-header`, children: !headless ? /* @__PURE__ */ jsx("div", { className: `omnicoder-ui-card-base-variant-${variant}-header-title`, children: title }) : null }),
    /* @__PURE__ */ jsx("div", { className: `omnicoder-ui-card-base-variant-${variant}-content`, children }),
    !footless ? /* @__PURE__ */ jsx("div", { className: `omnicoder-ui-card-base-variant-${variant}-footer`, children: footer }) : null
  ] });
};
var Card_default = Card;
export {
  Card_default as default
};
