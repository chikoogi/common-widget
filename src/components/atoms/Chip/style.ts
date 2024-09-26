import { css } from "@emotion/react";

export default {
  root: css`
    display: inline-flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    height: 26px;
    min-width: 28px;
    max-width: 200px;
    box-sizing: border-box;
    border-radius: 6px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    background-color: #ffffff1f;
    color: #fff;
    .chip-label {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
  number: css`
    font-family: "Pretendard";
    /* Common/inputLabel2 */
    background-color: #2e7af2;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    padding: 4px 6px;
  `,
  text: css`
    /* Common/Tooltip */
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 146.667% */
    padding: 3px 10px;
  `,
  tag: css`
    /* Common/Chip */
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;

    background-color: #ffeece;
    padding: 3px 10px;
    padding-right: 4px;

    .chip-label {
      color: #3e3e3e;
      margin-right: 6px;
    }

    .chip-deleteIcon {
      cursor: pointer;
      color: #ffbc3a;
      :hover {
        color: #faa500;
      }
    }
  `,
  color: (color?: string) => {
    switch (color) {
      case "best": {
        return css`
          background-color: rgba(3, 218, 198, 0.12);
          color: #03dac6;
        `;
      }
      case "spoiler": {
        return css`
          background-color: rgba(255, 196, 0, 0.12);
          color: #ffc400;
        `;
      }

      case "season": {
        return css`
          background: rgba(255, 255, 255, 0.15);
          color: #c7c8d3;
        `;
      }
      case "19": {
        return css`
          background-color: rgba(207, 102, 121, 0.15);
          color: #cf6679;
        `;
      }
      case "15": {
        return css`
          background: rgba(115, 200, 115, 0.15);
          color: #73c873;
        `;
      }
      case "12": {
        return css`
          background: rgba(255, 196, 0, 0.15);

          color: #ffc400;
        `;
      }
      case "ALL": {
        return css`
          background: rgba(255, 255, 255, 0.15);

          color: #9897a1;
        `;
      }
      case "7": {
        return css`
          background-color: rgba(84, 168, 253, 0.1);
          color: #54a8fd;
        `;
      }
      default: {
        return css`
          background-color: #4e4e4e;
          color: #fff;
        `;
      }
    }
  },
  chipLabel: css`
    max-width: 200px;
  `,
};
