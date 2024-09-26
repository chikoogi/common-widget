import { css } from "@emotion/react";
import Color from "@src/common/styles/Color";

export default {
  wrapper: (active: boolean) => css`
    position: relative;
    opacity: ${active ? 1 : 0.5};
    //width: 216px;
    &:hover {
      opacity: 1;
      .icon-launch {
        display: block;
      }
    }
  `,
  rank: css`
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background-color: #5354da;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 100% */
    letter-spacing: 0.15px;

    border-radius: 0 10px 0 10px;
    z-index: 1;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
  `,
  rating: css`
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  iconStar: css`
    font-size: 14px;
  `,
  typo1: css`
    margin-left: 8px;
  `,
  avatarGroup: css`
    div {
      border: none !important;
      width: 24px;
      height: 24px;
      font-size: 14px;
      background-color: #121212;
    }
  `,
  avatar: css`
    background-color: transparent;
    border: none !important;
    width: 24px;
    height: 24px;
    font-size: 24px !important;
    //z-index: 1;
  `,
  markImg: css`
    position: absolute;
    width: 70px;
    height: 70px;
    left: 10px;
    top: -20px;
    z-index: 1;
  `,
  imgWrapper: (active: boolean, isHoverScale: boolean) => css`
    width: ${active ? "216px" : "196px"};
    height: ${active ? "324px" : "294px"};

    border-radius: 10px;
    overflow: hidden;
    transition: 0.1s ease height;

    margin-bottom: 10px;
    position: relative;

    &:hover {
      img {
        transform: ${isHoverScale ? "scale(1.1)" : "none"};
      }
    }
  `,
  title: css`
    width: 190px;
    margin-bottom: 2px;
    overflow-x: hidden;
    display: flex;
    flex: 0 0 auto;
  `,
  marquee: css`
    //white-space: nowrap;
    //overflow-x: hidden;
    //text-overflow: ellipsis;
    :hover[data-overflow="true"] {
      animation: marquee 5s linear infinite;
      white-space: nowrap;
    }
    :not(:hover) {
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  `,
  Launch: css`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 16px;
    color: ${Color.dark.grey500};
    display: none;
    cursor: pointer;
  `,
  description: css`
    height: 48px;
    margin-top: 10px;
    position: relative;
  `,
  seasonLabel: css`
    position: absolute;
    right: 10px;
    bottom: 10px;

    display: flex;
    width: 46px;
    height: 22px;
    padding: 2px 6px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;

    border-radius: 6px;
    background: rgba(0, 0, 0, 0.6);

    color: #d9dae5;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;

    z-index: 1;
  `,
};
