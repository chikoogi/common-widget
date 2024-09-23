import { css } from "@emotion/react";

export default {
  container: css`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
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
    top: calc(50% - 30px);
    left: 30px;

    background-color: #3e3e3e80;
    color: #ffffff;
    z-index: 0;
    display: none;
  `,
  rightPageBtn: css`
    position: absolute;
    top: calc(50% - 30px);
    right: 30px;

    background-color: #3e3e3e80;
    color: #ffffff;
    z-index: 0;
    display: none;
  `,
};
