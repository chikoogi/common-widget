import styled from "./style";
import { HWCarouselProps } from "./type";
import ArrowBackIosRounded from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import ButtonIcon from "../ButtonIcon/ButtonIcon.tsx";

const Carousel = ({
  className,
  customCss,
  height = "100%",
  width = "100%",
  onClickPrev = () => null,
  onClickNext = () => null,
  invisibleNextButton = false,
  invisiblePrevButton = false,
  children,
  ...props
}: HWCarouselProps) => {
  return (
    <div
      className={["carousel-container", className ? className : null].filter(Boolean).join(" ")}
      css={[styled.container, { height, width }, customCss]}
      onKeyDown={(e) => {
        e.preventDefault();
        if (e.key === "ArrowRight") {
          onClickNext(e);
        } else if (e.key === "ArrowLeft") {
          onClickPrev(e);
        }
      }}
      {...props}
    >
      {!invisiblePrevButton && (
        <ButtonIcon
          className={"contents-hover"}
          customCss={styled.leftPageBtn}
          onClick={onClickPrev}
        >
          <ArrowBackIosRounded />
        </ButtonIcon>
      )}
      {children}
      {!invisibleNextButton && (
        <ButtonIcon
          className={"contents-hover"}
          customCss={styled.rightPageBtn}
          onClick={onClickNext}
        >
          <ArrowForwardIosRounded />
        </ButtonIcon>
      )}
    </div>
  );
};

export default Carousel;
