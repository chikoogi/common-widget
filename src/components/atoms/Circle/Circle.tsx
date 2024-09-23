import * as style from "./style";
import { HWCircleProps } from "./type";

const Circle = ({
  className,
  size = 5,
  color = "#ffffff",
  onClick,
  customCss,
  ...props
}: HWCircleProps) => {
  return (
    <div
      className={className}
      css={[style.root.circle(size, color), customCss]}
      onClick={onClick}
      {...props}
    />
  );
};

export default Circle;
