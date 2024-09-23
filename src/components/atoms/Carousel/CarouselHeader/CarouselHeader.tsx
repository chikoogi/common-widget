import React from "react";
import styled from "./style";
import { HWCarouselHeaderProps } from "./type";

const CarouselHeader = ({
  className,
  customCss,
  title,
  actions,
  ...props
}: HWCarouselHeaderProps) => {
  return (
    <div
      className={["HW-Carousel-Header", className ? className : null].filter(Boolean).join(" ")}
      css={[styled.header, customCss]}
      {...props}
    >
      <div className={"HW-Carousel-title"}>{title}</div>
      <div className={"HW-Carousel-actions"}>{actions}</div>
    </div>
  );
};

export default CarouselHeader;
