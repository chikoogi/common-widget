import styled from "./style";
import { SerializedStyles } from "@emotion/react";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { IconLaunch, IconMark150, IconStar } from "@src/assets";
import DefaultImage from "@components/atoms/DefaultImage/DefaultImage.tsx";
import { getCardURL } from "@src/tools/common-tool.ts";
import TypographyA from "@components/atoms/TypographyA";

export interface SeasonDO {
  list: {
    id: string;
    name: string;
  };
  now: number;
}

export interface RatingDO {
  rating?: number;
  total: number;
  user?: number;
}

interface ContentCardProps {
  id: string;
  srcId: string;
  contentName: string;
  platform?: number[];
  className?: string;
  age?: string;
  date: string;
  active: boolean;
  launch?: boolean;
  rank?: number;
  rating?: RatingDO;
  season?: SeasonDO;
  onClick?: (e: MouseEvent) => void;
  moveCard?: (dragId: string, hoverId: string) => void;
  findCard?: any;
  customCss?: SerializedStyles;
  isHoverScale?: boolean;
  favorite?: boolean;
}
const ContentCard = ({
  id,
  srcId,
  contentName,
  rating,
  platform = [],
  age,
  date,
  launch = true,
  className,
  rank,
  onClick,
  customCss,
  season,
  active,
  moveCard,
  findCard,
  isHoverScale = true,
  favorite = false,
  ...props
}: ContentCardProps) => {
  const navigate = useNavigate();
  const divRef = useRef<any>(null);
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  let classNames = [];
  classNames.push(
    "content-card-wrapper",
    active ? `active` : "in-active",
    className ? `${className}` : null
  );
  classNames = classNames.filter(Boolean);

  useEffect(() => {
    if (divRef.current) {
      if (divRef.current?.clientWidth < divRef.current?.scrollWidth) setIsOverflow(true);
    }
  }, []);

  return (
    <div
      className={classNames.join(" ")}
      css={[styled.wrapper(active), customCss]}
      onClick={onClick}
      {...props}
    >
      {favorite && <img src={IconMark150} css={styled.markImg} />}
      <div className={`card-box`} css={styled.imgWrapper(active, isHoverScale)}>
        {rank && rank < 100 && <div css={styled.rank}>{rank}</div>}
        <DefaultImage
          width="100%"
          height="100%"
          alt=""
          src={getCardURL({ type: "content", srcId: srcId })}
        />
        {season && season.now > 1 && <div css={styled.seasonLabel}>{`시즌 ${season.now}`}</div>}
      </div>
      <div css={styled.description}>
        <div className={"title"} css={styled.title}>
          <div
            className={"title-text"}
            css={styled.marquee}
            ref={divRef}
            data-overflow={isOverflow}
          >
            {contentName}
          </div>
        </div>
        <div css={styled.flexBetween}>
          <div className={"title-star"} css={styled.flexBetween}>
            <div css={styled.rating}>
              <IconStar css={styled.iconStar} />
              <TypographyA variant={"bodyXS"}>{rating?.rating || 0}</TypographyA>
            </div>
            <TypographyA variant={"bodyXS"} color={"#000"} css={styled.typo1}>
              {date}
            </TypographyA>
          </div>
        </div>
        {launch && (
          <IconLaunch
            className={"icon-launch"}
            onClick={(e) => {
              e.stopPropagation();
            }}
            css={styled.Launch}
          />
        )}
      </div>
    </div>
  );
};

export default ContentCard;
