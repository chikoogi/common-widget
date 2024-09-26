import React from "react";
import { SerializedStyles } from "@emotion/react";

export interface HWCheckBoxProps {
  className?: string;
  customCss?: SerializedStyles;
  size?: "small" | "medium";
  checked: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  disablePadding?: boolean;
  indeterminate?: boolean;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  indeterminateIcon?: React.ReactNode;
  label?: React.ReactNode;
  labelProps?: {
    className?: string;
    customCss: SerializedStyles;
  } & Omit<React.HTMLAttributes<HTMLLabelElement>, "onChange">;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
