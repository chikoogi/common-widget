import { css } from "@emotion/react";

export default {
  rootStyle: css`
    box-shadow: none;
    background-color: transparent;
    .Mui-expanded {
      margin: 0;
    }
    .MuiAccordionSummary-root {
      align-items: flex-start;
    }
    .MuiAccordionSummary-content {
      .Mui-expanded {
        margin: 0;
      }
      margin: 0;
    }
    .MuiAccordionSummary-expandIconWrapper {
      background-color: #414141;
      width: 42px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      color: #c7c8d3;
    }
  `,

  summaryStyle: css`
    min-height: 60px;
    padding: 0;
    &.Mui-expanded {
      min-height: 60px;
    }
    .MuiAccordionSummary-content {
      font-weight: 600;
      font-size: 15px;
    }
  `,
  detailStyle: css`
    padding: 0;
    flex-direction: column;
  `,
};
