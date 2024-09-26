import { css } from "@emotion/react";

export const root = {
  circle: (width: number, height: number, color: string, border: string) => css`
    background-color: ${color};
    width: ${width}px;
    height: ${height}px;
    display: inline-block;
    border-radius: 50%;
    box-sizing: border-box;
    border: ${border};
    &:hover {
      background-color: rgba(46, 122, 242, 0.5);
    }
  `,
};
