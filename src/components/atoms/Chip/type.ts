import { SerializedStyles } from "@emotion/react";
import { ChangeEvent, ReactElement, ReactNode } from "react";

export interface HWChipProps {
  className?: string;
  customCss?: SerializedStyles;
  variant?: "number" | "text" | "tag";
  label?: number | string | ReactNode;
  color?: string;
  max?: number;
  onDelete?: () => void;
  onClick?: () => void;
}
