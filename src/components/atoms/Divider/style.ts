import { css } from "@emotion/react";

export default {
  wrapper: (width: string, color: string) => css`
    width: ${width};
    height: 1px;

    background-color: ${color};
  `,
};
