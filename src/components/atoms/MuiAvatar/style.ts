import { css } from "@emotion/react";

export default {
  wrapper: css`
    position: relative;
  `,
  avatarWrapper: (size: string) => css`
    font-size: ${size};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  toggle: (size: string) => css`
    position: absolute;
    top: 0;
    left: 0;
    font-size: ${size};
  `,
  check: css`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 24px;
  `,
};
