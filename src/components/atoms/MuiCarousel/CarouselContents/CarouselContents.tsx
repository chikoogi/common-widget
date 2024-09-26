import React from "react";
import { HWCarouselContentsProps } from "./type";
import styled from "./style";

const CarouselContents = ({
  className,
  customCss,
  children,
  ...props
}: HWCarouselContentsProps) => {
  return (
    <div
      className={["HW-Carousel-contents", className ? className : null].filter(Boolean).join(" ")}
      css={[styled.wrapper, customCss]}
      tabIndex={-1}
      {...props}
    >
      {children}
    </div>
  );
};

export default CarouselContents;
