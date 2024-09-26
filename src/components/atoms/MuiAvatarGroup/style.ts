import { css } from "@emotion/react";
import Color from "@src/common/styles/Color";

export default {
  wrapper: (size: string, direction: string) => css`
    display: flex;
    //justify-content: center;
    align-items: center;
    div {
      margin-right: ${direction === "left" ? "-6px" : "0"};
      margin-left: ${direction === "left" ? "0" : "-6px"};
      width: ${size};
      height: ${size};
      border-radius: 50%;
      //border: 2px solid #000000;
      //background-color: #000000;
    }
  `,
  maxCircle: css`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Color.dark.elevation02};
  `
};
