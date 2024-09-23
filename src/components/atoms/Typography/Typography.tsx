import React from "react";
import { HWTypographyProps } from "./type";
import style from "./style";

const Typography = React.forwardRef(
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
Typography.displayName = "Typography";

export default Typography;
