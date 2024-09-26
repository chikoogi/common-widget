import { SerializedStyles } from "@emotion/react";
import React, { ReactNode } from "react";

export interface HWSliderProps {
  className?: string;
  customCss?: SerializedStyles;
  value?: number | number[];
  min?: number;
  max?: number;
  step?: number | null;
  onChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
  onChangeCommitted?: (
    event: React.SyntheticEvent | Event,
    value: number | number[]
  ) => void;
  track?: "normal" | "inverted";
  readOnly?: boolean;
  disabled?: boolean;
  disableSwap?: boolean;
  orientation?: "horizontal" | "vertical";
  marks?: { value: number; label: string }[];
  valueLabelDisplay?: "auto" | "off" | "on";
  valueLabelFormat?:
    | string
    | ((value: number, index: number) => React.ReactNode);
  // valueLabelPosition?: "top" | "bottom" | "start" | "end";
}
