import { HTMLAttributes } from "react";
import { SerializedStyles } from "@emotion/react";

export interface HWCarouselPaginationProps
  extends HTMLAttributes<HTMLDivElement> {
  maxPage: number;
  curPage: number;

  className?: string;
  customCss?: SerializedStyles;
  activeColor?: string;
  inactiveColor?: string;
  size?: number;
  gap?: number;
  onClickCircle?: (page: number, e: React.MouseEvent<HTMLDivElement>) => void;
}
