import { css } from "@emotion/react";

export const root = {
  circle: (size: number, color: string) => css`
    background-color: ${color};
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    border-radius: 50%;
    box-sizing: border-box;

    &:hover {
      border: 1.6px solid #2e7af2;
      background-color: rgba(46, 122, 242, 0.5);
    }
  `,
};
