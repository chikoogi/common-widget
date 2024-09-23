import React from "react";
import styled from "./style";
import { SerializedStyles } from "@emotion/react";

interface ColorBoxProps {
  color?: string;
  secondColor?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  customCss?: SerializedStyles;
}

const ColorBox = ({
  color = "linear-gradient(to left top, white 46%, red, white 56%)",
  size = "25px",
  secondColor,
  onClick,
  customCss,
}: ColorBoxProps) => {
  return (
    <div
      className={"color-box-wrapper"}
      css={[styled.wrapper({ color, secondColor, size }), customCss]}
      onClick={onClick}
    >
      <div className={"color-box-one"} />
      {secondColor && <div className={"color-box-second"} />}
    </div>
  );
};

export default ColorBox;
