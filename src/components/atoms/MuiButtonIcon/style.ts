import { css } from "@emotion/react";

export const root = (selected: boolean) => css`
  color: ${selected ? "#3d3d3d" : "#7d7e85"};
  &:hover {
    color: #3d3d3d;
  }
`;

export const padding = (disablePadding: boolean) =>
  disablePadding
    ? css`
        padding: 0;
      `
    : null;
