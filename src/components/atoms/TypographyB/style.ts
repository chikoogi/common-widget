import { css } from "@emotion/react";
import { FontWeight, Size } from "./type";

export default {
  wrapper: (color: string) => css`
    color: ${color};
  `,
  size: (size: Size) => {
    const fn = (fontSize: string, lineHeight: string) => css`
      font-size: ${fontSize};
      line-height: ${lineHeight};
    `;
    switch (size) {
      case "xxxxl":
        return fn("32px", "40px");
      case "xxxl":
        return fn("28px", "35px");
      case "xxl":
        return fn("22px", "30px");
      case "xl":
        return fn("20px", "25px");
      case "l":
        return fn("16px", "20px");
      case "m":
        return fn("14px", "18px");
      case "s":
        return fn("13px", "16px");
      case "xs":
        return fn("12px", "15px");
      case "xxs":
        return fn("11px", "14px");
      case "xxxs":
        return fn("10px", "13px");
      case "xxxxs":
        return fn("8px", "10px");
    }
  },
  fontWeight: (fontWeight: FontWeight) => {
    const fn = (fontWeight: number) => css`
      font-weight: ${fontWeight};
    `;
    switch (fontWeight) {
      case "Black":
        return fn(900);
      case "Extra Bold":
        return fn(800);
      case "Bold":
        return fn(700);
      case "Semi Bold":
        return fn(600);
      case "Medium":
        return fn(500);
      case "Regular":
        return fn(400);
      case "Light":
        return fn(300);
      case "Extra Light":
        return fn(200);
      case "Thin":
        return fn(100);
    }
  },
  underline: css`
    text-decoration: underline;
  `,
  italic: css`
    font-style: italic;
  `,
};
