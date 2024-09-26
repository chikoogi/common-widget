import { css } from "@emotion/react";

export default {
  wrapper: css`
    --width: max-content;
    --height: 30px;

    position: relative;
    width: var(--width);
    height: var(--height);
    color: #c7c8d3;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 138.462% */

    border-radius: 5px;
    padding: 6px 10px;
    background-color: #383838;

    &:after {
      border-top: 5px solid transparent;
      border-left: 5px solid #383838;
      border-right: 0px solid transparent;
      border-bottom: 5px solid transparent;
      content: "";
      position: absolute;
      top: calc(50% - 5px);
      left: 100%;
    }
  `,
};
