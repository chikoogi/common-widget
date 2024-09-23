import { css } from "@emotion/react";

export default {
  root: css`
    font-family: Pretendard;
  `,
  color: (color: string) => css`
    color: ${color};
  `,
  family: (family: string) => css`
    font-family: ${family};
  `,
  variant: (name: string) => {
    const fontColor = "#FFF";

    switch (name) {
      case "h4": {
        return css`
          font-weight: 400;
          font-size: 34px;
          line-height: 32px;
          letter-spacing: 0.25px;
          /* color: ${fontColor} */
        `;
      }
      case "h4_2": {
        return css`
          font-weight: 500;
          font-size: 34px;
          line-height: 32px;
          letter-spacing: 0.25px;
          /* color: ${fontColor} */
        `;
      }
      case "h4_4": {
        return css`
          font-weight: 700;
          font-size: 34px;
          line-height: 32px;
          letter-spacing: 0.25px;
          /* color: ${fontColor} */
        `;
      }
      case "h5": {
        return css`
          font-weight: 400;
          font-size: 24px;
          line-height: 24px;
          /* letter-spacing: 0.25px; */
          /* color: ${fontColor} */
        `;
      }
      case "h5_2": {
        return css`
          font-weight: 500;
          font-size: 24px;
          line-height: 24px;
          /* letter-spacing: 0.25px; */
          /* color: ${fontColor} */
        `;
      }
      case "h5_3": {
        return css`
          font-weight: 600;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "h6": {
        return css`
          font-weight: 500;
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "h6_2": {
        return css`
          font-weight: 600;
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "h7_3": {
        return css`
          font-weight: 600;
          font-size: 18px;
          line-height: 32px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "Subtitle1": {
        return css`
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "Subtitle2": {
        return css`
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "Subtitle3": {
        return css`
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "body1": {
        return css`
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "body2": {
        return css`
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.17px;
          /* color: ${fontColor} */
        `;
      }
      case "body3": {
        return css`
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.17px;
          /* color: ${fontColor} */
        `;
      }
      case "body4": {
        return css`
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.17px;
          /* color: ${fontColor} */
        `;
      }
      case "body5": {
        return css`
          font-weight: 600;
          font-size: 15px;
          line-height: 26px;
          letter-spacing: 0.17px;
          /* color: ${fontColor} */
        `;
      }
      case "BUTTON LARGE": {
        return css`
          font-weight: 500;
          font-size: 15px;
          line-height: 26px;
          letter-spacing: 0.46px;
          /* color: ${fontColor} */
        `;
      }
      case "BUTTON MEDIUM": {
        return css`
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 0.4px;
          /* color: ${fontColor} */
        `;
      }
      case "BUTTON SMALL": {
        return css`
          font-weight: 500;
          font-size: 13px;
          line-height: 22px;
          letter-spacing: 0.46px;
          /* color: ${fontColor} */
        `;
      }
      case "Caption": {
        return css`
          font-weight: 400;
          font-size: 12px;
          line-height: 12px;
          letter-spacing: 0.17px;
          /* color: ${fontColor} */
        `;
      }
      case "inputLabel1": {
        return css`
          font-weight: 400;
          font-size: 12px;
          line-height: 12px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "inputLabel2": {
        return css`
          font-weight: 500;
          font-size: 12px;
          line-height: 12px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "inputText": {
        return css`
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.17px;
          /* color: ${fontColor} */
        `;
      }
      case "tooltip": {
        return css`
          font-weight: 500;
          font-size: 10px;
          line-height: 14px;
          /* letter-spacing: 0.15px; */
          /* color: ${fontColor} */
        `;
      }
      case "Table Header": {
        return css`
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 0.17px;
          /* color: ${fontColor} */
        `;
      }
      case "Helper Text": {
        return css`
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.4px;
          /* color: ${fontColor} */
        `;
      }
      case "Alert Title": {
        return css`
          font-weight: 500;
          font-size: 16px;
          line-height: 16px;
          letter-spacing: 0.15px;
          /* color: ${fontColor} */
        `;
      }
      case "Chip": {
        return css`
          font-weight: 400;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 0.15px;
        `;
      }
      case "helper Text2": {
        return css`
          font-size: 10px;
          font-weight: 400;
          line-height: 10px;
          letter-spacing: -0.3px;
        `;
      }
      case "cell1": {
        return css`
          font-family: Noto Sans KR;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        `;
      }
      case "table title1": {
        return css`
          font-family: Noto Sans KR;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        `;
      }
      case "displayL": {
        return css`
          font-size: 64px;
          font-style: normal;
          font-weight: 500;
          line-height: 68px;
        `;
      }
      case "displayM": {
        return css`
          font-size: 52px;
          font-style: normal;
          font-weight: 500;
          line-height: 60px;
        `;
      }
      case "headlineXL": {
        return css`
          font-size: 40px;
          font-style: normal;
          font-weight: 300;
          line-height: 48px;
        `;
      }
      case "headlineL": {
        return css`
          font-size: 36px;
          font-style: normal;
          font-weight: 300;
          line-height: 44px;
        `;
      }
      case "headlineM": {
        return css`
          font-size: 32px;
          font-style: normal;
          font-weight: 400;
          line-height: 40px;
        `;
      }
      case "headlineS": {
        return css`
          font-size: 28px;
          font-style: normal;
          font-weight: 400;
          line-height: 38px;
        `;
      }
      case "headlineXS": {
        return css`
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
        `;
      }
      case "headlineXXS": {
        return css`
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
        `;
      }
      case "bodyXL": {
        return css`
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
        `;
      }
      case "bodyL": {
        return css`
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
        `;
      }
      case "bodyM": {
        return css`
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
        `;
      }
      case "bodyS": {
        return css`
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
        `;
      }
      case "bodyXS": {
        return css`
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
        `;
      }

      default: {
        return css``;
      }
    }
  },
};
