import { Interpolation, Theme } from "@emotion/react";
import { HTMLAttributes } from "react";

export interface HWCarouselContentsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  customCss?: Interpolation<Theme>;
}
