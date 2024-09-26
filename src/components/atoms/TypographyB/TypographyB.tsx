// 황성열
"use client";

import React from "react";
import styled from "./style";
import { _TypographyComponent, _TypographyProps } from "./type";
import { PolymorphicRef } from "../../../polymorphic";
import classNames from "classnames";

const _Typography: _TypographyComponent = React.forwardRef(
  <C extends React.ElementType>(
    {
      className,
      fontWeight = "Regular",
      size = "xl",
      italic = false,
      underline = false,
      color = "inherit",
      children,
      component,
      ...props
    }: _TypographyProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = component || "span";

    return (
      <Component
        className={classNames(
          "BizUi_Typography",
          `Text-${size}/${fontWeight}`,
          underline && "_Line",
          italic && "_Italic",
          className
        )}
        css={[
          styled.wrapper(color),
          styled.size(size),
          styled.fontWeight(fontWeight),
          props.underline && styled.underline,
          italic && styled.italic,
        ]}
        {...props}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);

export default _Typography;
