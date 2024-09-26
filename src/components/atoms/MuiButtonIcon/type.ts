import React, { DOMAttributes } from "react";
import { SerializedStyles } from "@emotion/react";

export interface HWIconButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  customCss?: SerializedStyles;
  size?: "medium" | "small";
  selected?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disablePadding?: boolean;
  disableRipple?: boolean;
  tabIndex?: number;
}
