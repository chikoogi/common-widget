import { SerializedStyles } from "@emotion/react";
import { AlertProps } from "@mui/material";
import React from "react";
export interface HWAlertProps {
  className?: string;
  customCss?: SerializedStyles;
  type?: "error" | "success" | "info";
  disableCloseIcon?: boolean;
  title?: React.ReactNode;
  timeInfo?: string;
  children: React.ReactNode;
  onClose?: (e?: React.SyntheticEvent) => void;
  autoCloseTime?: number;
}
