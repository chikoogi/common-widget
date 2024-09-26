import { css } from "@emotion/react";

export default {
  wrapper: (curPage: number, size: number, gap: number) => css`
    width: 100%;
    height: ${size}px;
    box-sizing: border-box;

    display: flex;
    .HW-Carousel-Pagination-Contents-Wrapper {
      display: flex;
      align-items: center;

      left: 50%;
      transform: translate(${-1.5 * size - curPage * (size + gap)}px);
      .icon-circle {
        margin: 0 ${gap / 2}px;
      }
    }
    .relative {
      position: relative;
    }

    .duration-400 {
      transition-duration: 0.4s;
    }
    .ease-out {
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    .transition-transform {
      transition-property: transform;
    }
    .transition-all {
      transition-property: all;
    }
    .transition-hover-none {
      &:hover {
        transition-property: none;
      }
    }
  `,
};
