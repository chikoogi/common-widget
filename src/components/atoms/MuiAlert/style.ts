import { css } from "@emotion/react";

export const root = {
  wrapper: css`
    width: 320px;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #2c2c2c;
    border: 1px solid #42424a;
    border-radius: 10px;
    .MuiAlert-message {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 4px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    .MuiAlert-action {
      padding: 4px 0 0 9px;
    }
  `,
  title: css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: unset;
    font-family: Pretendard;

    .title {
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px; /* 140% */
    }
    .time-info {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
      letter-spacing: -0.1px;
    }
  `,
};

export const backgroundColor = (type: "error" | "success" | "info") => {
  if (type === "error")
    return css`
      //background-color: #fdecea;
    `;
  if (type === "info")
    return css`
      //background-color: #e5f3fa;
    `;
  return css`
    //background-color: #eaf2ea;
  `;
};
