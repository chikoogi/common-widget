import React, { useMemo } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { HWCheckBoxProps } from "./type";
import * as style from "./style";

const HWCheckBox = React.forwardRef<HTMLButtonElement, HWCheckBoxProps>(
  (
    {
      className,
      customCss,
      size = "medium",
      disabled = false,
      disableRipple = false,
      disablePadding = false,
      checked,
      icon,
      checkedIcon,
      indeterminate,
      indeterminateIcon,
      onChange,
      onClick,
      onDoubleClick,
      label = undefined,
      labelProps = { customCss: undefined },
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      onChange && onChange(checked, e);
    };

    const { labelCustomCss, restProps } = useMemo(() => {
      const { customCss: labelCustomCss, ...restProps } = labelProps;
      return { labelCustomCss, restProps };
    }, [labelProps]);

    return (
      <>
        {label && (
          <FormControlLabel
            css={[style.root.label, labelCustomCss]}
            label={label}
            control={
              <Checkbox
                className={className}
                css={[style.root.checkbox(disablePadding), customCss]}
                ref={ref}
                size={size}
                disableRipple={disableRipple}
                disabled={disabled}
                checked={checked}
                indeterminate={indeterminate}
                icon={icon}
                checkedIcon={checkedIcon}
                indeterminateIcon={indeterminateIcon}
                onChange={handleChange}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                {...props}
              />
            }
            {...restProps}
          />
        )}
        {!Boolean(label) && (
          <Checkbox
            className={className}
            css={[style.root.checkbox(disablePadding), customCss]}
            ref={ref}
            size={size}
            disableRipple={disableRipple}
            disabled={disabled}
            checked={checked}
            indeterminate={indeterminate}
            icon={icon}
            checkedIcon={checkedIcon}
            indeterminateIcon={indeterminateIcon}
            onChange={handleChange}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            {...props}
          />
        )}
      </>
    );
  }
);

export default HWCheckBox;
