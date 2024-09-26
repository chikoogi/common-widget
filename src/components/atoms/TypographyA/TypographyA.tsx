import React from "react";
import { HWTypographyProps } from "./type";
import style from "./style";

const TypographyA = React.forwardRef(
  (
    {
      className,
      variant = "body1",
      color = "inherit",
      customCss,
      family = "Pretendard",
      ...props
    }: HWTypographyProps,
    ref: React.Ref<HTMLSpanElement> | React.RefCallback<HTMLSpanElement>
  ) => {
    return (
      <span
        className={className}
        css={[style.root, { color }, style.variant(variant), style.family(family), customCss]}
        ref={ref}
        {...props}
      />
    );
  }
);
TypographyA.displayName = "Typography";

export default TypographyA;
