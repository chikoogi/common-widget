import { HTMLAttributes } from "react";
import { Interpolation, Theme } from "@emotion/react";

export interface HWCarouselPaginationProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  customCss?: Interpolation<Theme>;
  maxPage: number;
  curPage: number;
  activeColor?: string;
  inactiveColor?: string;
  size?: number;
  gap?: number;
  onClickCircle?: (page: number, e: React.MouseEvent<HTMLDivElement>) => void;
}
