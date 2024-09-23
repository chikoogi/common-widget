import { css } from "@emotion/react";

export default {
  wrapper: css`
    background-color: #fff;

    padding: 8px 0;
    box-shadow: 0 0 8px 0 #00000033;
    gap: 10px;
    border-radius: 8px;

    z-index: 10;
  `,
  subWrapper: css`
    display: flex;
    flex-direction: column;
  `,
  menuItemWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

    position: relative;

    padding: 10px 20px;

    width: 100%;
    //position: absolute;
    //top: 0;
    //left: 100%;

    &:hover {
      background-color: #f5f5f5;
    }
  `,
  menuItemTitle: css`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
  `,
  arrowIcon: css`
    margin-left: 20px;
  `,
  divider: css`
    padding: 0 12px;
  `,
};
