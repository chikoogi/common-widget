import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
  `,

  titleWrapper: css`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 20px;

    cursor: pointer;
  `,

  contentWrapper: (isExpanded: boolean) => css`
    transition: height 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    height: ${isExpanded ? "auto" : "0px"};
    visibility: ${isExpanded ? "visible" : "hidden"};
  `,
  toggleBtnGroup: css`
    border: 1px solid #e8eaed;
    border-radius: 8px;
    button {
      border-radius: 5px !important;
      border: none;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;

      width: 50px;
      height: 24px;
      margin: 4px;
    }

    button.Mui-selected {
      background-color: #f1f3f4;
      color: #5f6368;
      border-radius: 5px;
    }
  `,
};
