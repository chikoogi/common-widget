import { css } from "@emotion/react";

export default {
  wrapper: (curPage: number, size: number, gap: number) => css`
    height: ${size}px;
    box-sizing: border-box;

    display: flex;

    .HW-Carousel-Pagination-Contents-Wrapper {
      display: flex;
      align-items: center;

      .icon-circle {
        margin: 0 ${gap / 2}px;
        //&.icon-circle:nth-last-child(2) {
        //  animation: jumpingAnimation 0.6s 0.2s ease-in infinite;
        //}
        transition: 0.5s ease;
      }

      //.icon-circle:before {
      //  content: ".";
      //  position: absolute;
      //  left: 4px;
      //  top: 4px;
      //  width: 16px;
      //  height: 16px;
      //  background: #a00;
      //  border-radius: 50%;
      //  transition: all 0.3s linear; /* will work currently only on Firefox */
      //}
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
