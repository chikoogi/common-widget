import { Interpolation, Theme } from "@emotion/react";
import { HTMLAttributes } from "react";

export interface HWCarouselProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  customCss?: Interpolation<Theme>;
  height?: string;
  width?: string;
  invisiblePrevButton?: boolean;
  invisibleNextButton?: boolean;
  onClickPrev?: (e: React.SyntheticEvent) => void;
  onClickNext?: (e: React.SyntheticEvent) => void;
  children?: React.ReactNode;
}
