import { css } from "@emotion/react";

export default {
  wrapper: (
    width: string,
    height: string,
    radius: string,
    backgroundColor: string,
    theme: string
  ) => css`
    width: ${width};
    height: ${height};
    border-radius: ${radius};

    background-color: ${theme === "white" ? "#00000099" : "#FFFFFF80"};
    color: ${theme === "white" ? "#FFFFFF" : "#FFFFFF"};
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      background-color: ${theme === "white" ? "#000000CC" : "#FFFFFF80"};
      color: ${theme === "white" ? "#FFFFFF" : "#2C2C34"};
    }
  `,
};
