import styled from "./style";
import { HWCarouselProps } from "./type";
import ArrowBackIosRounded from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded";
import MuiButtonIcon from "@components/atoms/MuiButtonIcon/MuiButtonIcon.tsx";

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
        <MuiButtonIcon
          className={"contents-hover"}
          customCss={styled.leftPageBtn}
          onClick={onClickPrev}
        >
          <ArrowBackIosRounded />
        </MuiButtonIcon>
      )}
      {children}
      {!invisibleNextButton && (
        <MuiButtonIcon
          className={"contents-hover"}
          customCss={styled.rightPageBtn}
          onClick={onClickNext}
        >
          <ArrowForwardIosRounded />
        </MuiButtonIcon>
      )}
    </div>
  );
};

export default Carousel;
