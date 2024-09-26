import React, { useEffect } from "react";
import { HWAlertProps } from "./type";
import * as styled from "./style";
import { Alert, AlertTitle } from "@mui/material";
import CheckCircleOutlineOutlined from "@mui/icons-material/CheckCircleOutlineOutlined";

const HWAlert = React.forwardRef<HTMLDivElement, HWAlertProps>(
  (
    {
      className = undefined,
      customCss,
      type = "success",
      children,
      disableCloseIcon = false,
      timeInfo,
      title = undefined,
      onClose,
      autoCloseTime = 4000,
      ...props
    },
    ref
  ) => {
    const handleClose = (e: React.SyntheticEvent) => {
      if (onClose) {
        onClose(e);
      }
    };

    useEffect(() => {
      if (autoCloseTime)
        setTimeout(() => {
          onClose && onClose();
        }, autoCloseTime);
    }, []);

    return (
      <Alert
        className={className}
        css={[styled.root.wrapper, styled.backgroundColor(type), customCss]}
        ref={ref}
        variant="outlined"
        severity={type}
        iconMapping={{
          success: <CheckCircleOutlineOutlined fontSize="inherit" />,
        }}
        onClose={disableCloseIcon ? undefined : handleClose}
        {...props}
      >
        {title && (
          <AlertTitle css={styled.root.title}>
            <span className="title">{title}</span>
            <span className="time-info">{timeInfo}</span>
          </AlertTitle>
        )}
        {children}
      </Alert>
    );
  }
);
export default HWAlert;
