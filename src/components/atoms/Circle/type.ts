import { SerializedStyles } from "@emotion/react";
import { HTMLAttributes } from "react";

export interface HWCircleProps extends HTMLAttributes<HTMLDivElement> {
  customCss?: SerializedStyles;
  width?: number;
  height?: number;
  border?: string;
  color?: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
