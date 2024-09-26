import { css } from "@emotion/react";
import Color from "@src/common/styles/Color";

export const root = css`
  height: 7px;
  width: 80%;
  padding: 20px 0;
  margin: unset;
  color: #2e7af2;
  &.MuiSlider-vertical {
    height: 100%;
    width: 7px;
    padding: 0 20px;
    margin: unset;
  }

  /* .MuiSlider-track {
    background-color: #2e7af2;
    border: unset;
  } */
  
  .MuiSlider-track:not(.Mui-disabled) {
    background-color: ${Color.dark.primary700};
    border: unset;
  }
  .MuiSlider-rail:not(.Mui-disabled) {
    opacity: 1;
    background-color: ${Color.dark.grey200};
  }
  .MuiSlider-thumb {
    width: 18px;
    height: 18px;
    background-color: ${Color.dark.grey300};
    border: 2px solid ${Color.dark.grey400};
    :hover {
      box-shadow: 0px 0px 0px 8px #2e7af220;
    }
    /* &.Mui-active:not(.Mui-disabled) {
    } */
    &.Mui-focusVisible {
      box-shadow: 0px 0px 0px 8px #2e7af220;
    }
    /* &.MuiSlider-dragging {
    } */
    &.Mui-disabled {
      background-color: #d6d6d6;
    }
  }

  &.MuiSlider-trackInverted {
    .MuiSlider-rail:not(.Mui-disabled) {
      background-color: #2e7af2;
    }
    .MuiSlider-track:not(.Mui-disabled) {
      background-color: #b7d2fa;
    }
    &.Mui-disabled {
      .MuiSlider-rail {
        background-color: #d6d6d6;
      }
      .MuiSlider-track {
        background-color: #efefef;
      }
    }
  }

  &.Mui-disabled {
    color: #d6d6d6;
    .MuiSlider-rail {
      background-color: #d6d6d6;
    }
    .MuiSlider-track {
      background-color: #d6d6d6;
    }
  }

  .MuiSlider-mark {
  }
  .MuiSlider-valueLabelOpen {
    border-radius: 8px;
    background-color: ${Color.dark.grey200};
    border: 1px solid ${Color.dark.grey300};
    color: #fff;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    &::before {
      border-bottom: 1px solid ${Color.dark.grey300};
      border-right: 1px solid ${Color.dark.grey300};

    }
  }
`;

export const valueLabel = (
  valueLabelPosition: "top" | "bottom" | "start" | "end"
) => {
  //vertical과 horizontal의 경우 label의 default가 다름.. 일단 지금은 사용 X
  switch (valueLabelPosition) {
    case "top":
      return css``;
    case "bottom":
      return css`
        .MuiSlider-valueLabel.MuiSlider-valueLabelOpen {
          transform: translateY(100%) scale(1);
          ::before {
            top: calc(-50% + ${Math.sqrt(3) * 4}px);
          }

          &.MuiSlider-vertical {
            transform: translateY(100%) scale(1);
            ::before {
              top: calc(-50% + ${Math.sqrt(3) * 4}px);
            }
          }
        }
        .MuiSlider-valueLabel:before {
          transform: translate(-50%, 50%) rotate(45deg);
        }
      `;
    case "start":
      return css`
        .MuiSlider-valueLabel.MuiSlider-valueLabelOpen {
          transform: translateY(-100%) scale(1);
          ::before {
          }
        }
        .MuiSlider-valueLabel:before {
          transform: translate(-50%, 50%) rotate(45deg);
        }
      `;
    case "end":
      return css`
        .MuiSlider-valueLabel.MuiSlider-valueLabelOpen {
          transform: translateY(100%) scale(1);
          ::before {
            top: calc(-50% + ${Math.sqrt(2) * 4}px);
          }
        }
        .MuiSlider-valueLabel:before {
          transform: translate(-50%, 50%) rotate(45deg);
        }
      `;
  }
};

export const readOnly = css`
  pointer-events: none;
`;
