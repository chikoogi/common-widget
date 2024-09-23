import { css } from "@emotion/react";

export default {
  wrapper: (props: any) => css`
    width: ${props.size};
    height: ${props.size};
    cursor: pointer;
    .color-box-one {
      width: 100%;
      height: 100%;
      display: flex;
      border-radius: 1px;
      box-sizing: border-box;
      border: 1px solid lightgray;
      background: ${props.color
        ? props.color
        : `linear-gradient(to left top, white 46%, red, white 56%)`};
      > div {
        width: 100%;
        height: 100%;
      }
    }
    .color-box-second {
      width: 100%;
      height: 100%;
      display: flex;
      border-radius: 1px;
      box-sizing: border-box;
      border: 1px solid lightgray;
      background: ${props.secondColor
        ? props.secondColor
        : `linear-gradient(to left top, white 46%, red, white 56%)`};
      > div {
        width: 100%;
        height: 100%;
      }
    }
  `,
  small: css`
    width: 20px;
    height: 20px;
  `,
  middle: css`
    width: 25px;
    height: 25px;
  `,
  large: css`
    width: 34px;
    height: 34px;
  `,
};
