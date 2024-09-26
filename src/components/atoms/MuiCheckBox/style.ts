import { css } from "@emotion/react";

export const root = {
  checkbox: (disablePadding: boolean) => css`
    color: #9897A1;
    ${disablePadding ? "padding: 0px;" : ""};
    &.MuiCheckbox-indeterminate {
      color: #2e7af2;
    }
    &.Mui-checked {
      color: #2e7af2;
    }
    &.Mui-disabled {
      color: #d6d6d6;
    }
  `,
  label: css`
    margin-left: unset;
    margin-right: unset;
  `,
};
