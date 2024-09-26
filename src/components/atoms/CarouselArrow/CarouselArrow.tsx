import styled from "./style";
import { SerializedStyles } from "@emotion/react";
import { IconChevronLeft, IconChevronRight } from "@src/assets";

interface CarouselArrowProps {
  theme?: string;
  direction: string;
  className?: string;
  height?: string;
  width?: string;
  radius?: string;
  backgroundColor?: string;
  customCss?: SerializedStyles;
  onClick?: () => void;
  disabled?: boolean;
  display?: string;
}

const CarouselArrow = ({
  className,
  theme = "white",
  direction,
  height = "52px",
  width = "30px",
  radius = "20px",
  backgroundColor = "#00000099",
  customCss,
  onClick,
}: CarouselArrowProps) => {
  return (
    <div
      className={className}
      css={[styled.wrapper(width, height, radius, backgroundColor, theme), customCss]}
      onClick={onClick}
    >
      {direction === "left" && <IconChevronLeft />}
      {direction === "right" && <IconChevronRight />}
    </div>
  );
};

export default CarouselArrow;
