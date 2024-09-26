import { Interpolation, Theme } from "@emotion/react";
import { HTMLAttributes } from "react";

export interface HWCarouselHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "actions"> {
  className?: string;
  customCss?: Interpolation<Theme>;
  title?: React.ReactNode;
  actions?: React.ReactNode;
}
