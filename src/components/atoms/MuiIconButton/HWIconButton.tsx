import React from "react";
import { IconButton } from "@mui/material";
import { HWIconButtonProps } from "./type";
import * as style from "./style";

const HWIconButton = React.forwardRef<HTMLButtonElement, HWIconButtonProps>(
  (
    {
      className,
      customCss,
      disabled = false,
      selected = false,
      children,
      size = "medium",
      disablePadding = false,
      disableRipple = false,
      onClick,
      onDoubleClick,
      onMouseDown,
      onMouseOver,
      onMouseOut,
      ...props
    },
    ref
  ) => {
    return (
      <IconButton
        className={className}
        css={[style.root(selected), style.padding(disablePadding), customCss]}
        ref={ref}
        size={size}
        disabled={disabled}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onMouseDown={onMouseDown}
        onMouseOut={onMouseOut}
        disableRipple={disableRipple}
        onMouseOver={onMouseOver}

        {...props}
      >
        {children}
      </IconButton>
    );
  }
);
HWIconButton.displayName = "HWIconButton";

export default HWIconButton;
