import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    color: "white",
    // background: "primary",
    background: "linear-gradient(90deg, #4269BB 0%, #8214FE 100%)", // 没有使用theme中的值
  },
  [variants.SECONDARY]: {
    background: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      background: "transparent",
    },
  },
  [variants.TERTIARY]: {
    background: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    background: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    background: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    background: "success",
    color: "white",
  },
  [variants.TEXT]: {
    background: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    background: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
};
