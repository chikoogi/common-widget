import { Slider } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import * as style from "./style";
import { HWSliderProps } from "./type";

const HWSlider = React.forwardRef(
  (
    {
      className,
      customCss,
      value,
      min = 0,
      max = 100,
      step = 1,
      onChange,
      onChangeCommitted,
      readOnly,
      disabled,
      disableSwap,
      orientation = "horizontal",
      marks,
      valueLabelDisplay = "off",
      valueLabelFormat,
      // valueLabelPosition = orientation === "horizontal" ? "bottom" : "start",
      track = "normal",
      ...props
    }: HWSliderProps,
    ref: React.Ref<HTMLSpanElement>
  ) => {
    return (
      <Slider
        className={className}
        css={[style.root, readOnly && style.readOnly, customCss]}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted}
        disabled={disabled}
        disableSwap={disableSwap}
        orientation={orientation}
        valueLabelDisplay={valueLabelDisplay}
        valueLabelFormat={valueLabelFormat}
        marks={marks}
        track={track}
        ref={ref}
        {...props}
      />
    );
  }
);

export default HWSlider;
