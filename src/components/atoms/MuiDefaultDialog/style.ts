import { css } from "@emotion/react";

export default {
  wrapper: (width: string, height?: string) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    .MuiBackdrop-root {
      background-color: rgba(239, 244, 252, 0.5);
      backdrop-filter: blur(4px);
    }

    .MuiDialog-paper {
      width: ${width};
      height: ${height};
      max-width: unset;
      border-radius: 12px;
      box-shadow: 0px 0px 20px 3px #0000001f;
    }
  `,
  header: css``,
  content: css``,
  footer: css``,
};
