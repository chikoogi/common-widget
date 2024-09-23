import { Interpolation, Theme } from "@emotion/react";
import { HTMLAttributes } from "react";

export interface HWCircleProps extends HTMLAttributes<HTMLDivElement> {
  customCss?: Interpolation<Theme>;
  size?: number;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
