import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
    :focus-visible {
      outline: none;
    }
    :hover {
      .contents-hover {
        z-index: 1;
        display: flex;
        visibility: visible;
      }
    }
  `,
  leftPageBtn: css`
    position: absolute;
    top: 50%;
    left: 0;

    background-color: #3e3e3e80;
    color: #ffffff;
    z-index: 0;
    display: none;
  `,
  rightPageBtn: css`
    position: absolute;
    top: 50%;
    right: 0;

    background-color: #3e3e3e80;
    color: #ffffff;
    z-index: 0;
    display: none;
  `,
};
