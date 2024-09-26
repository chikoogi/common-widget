import { css } from "@emotion/react";

export default {
  wrapper: css`
    background-color: #252525;
  `,
  subWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  `,
  modal: (size: number, isModal: boolean) => css`
    @keyframes slideIn {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0%);
      }
    }
    @keyframes slideOut {
      from {
        transform: translateY(0%);
      }
      to {
        transform: translateY(100%);
      }
    }

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #232323;
    border: 1px solid #333333;
    z-index: 15;
    user-select: none;

    &.openAnimation {
      animation: slideIn 0.5s forwards;
    }

    &.closeAnimation {
      animation: slideOut 0.5s forwards;
    }

    height: ${size}px;
  `,
  modalWrapper: css`
    width: 100%;
    height: 100%;

    overflow: auto;
    border-radius: 15px;
  `,
  heightHandler: css`
    --width: 140px;
    width: var(--width);

    position: absolute;
    top: 16px;
    left: calc(50% - (var(--width) / 2));

    height: 8px;
    border-radius: 10px;
    background-color: #2c2c2c;

    cursor: pointer;
    z-index: 10;
    &:hover {
      background-color: #383838;
    }
  `,
};
