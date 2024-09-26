import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./style";
import { HWChipProps } from "./type";

const Chip = React.forwardRef<HTMLDivElement, HWChipProps>(
  (
    { className, customCss, label, max = 999, variant = "text", color, onDelete, ...props },
    ref
  ) => {
    if (variant === "number" && typeof label === "number" && label > max) {
      label = `${max}+`;
    }
    const labelRef = useRef<HTMLSpanElement | null>(null);
    const [isOverflowed, setIsOverFlowed] = useState<boolean>(false);
    const computeIsOverFlowed = () => {
      if (!labelRef.current) return;
      setIsOverFlowed(labelRef.current.scrollWidth - 1 >= labelRef.current.clientWidth);
    };

    useLayoutEffect(() => {
      computeIsOverFlowed();
    }, [labelRef, labelRef.current?.clientWidth]);

    useEffect(() => {
      window.addEventListener("resize", computeIsOverFlowed);
      computeIsOverFlowed(); // 초기값 설정을 위해 한번 호출
      return () => window.removeEventListener("resize", computeIsOverFlowed);
    }, []);

    const deleteIcon = (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        onClick={onDelete}
        className="chip-deleteIcon"
      >
        <path
          d="M7.99998 1.33334C4.31331 1.33334 1.33331 4.31334 1.33331 8.00001C1.33331 11.6867 4.31331 14.6667 7.99998 14.6667C11.6866 14.6667 14.6666 11.6867 14.6666 8.00001C14.6666 4.31334 11.6866 1.33334 7.99998 1.33334ZM11.3333 10.3933L10.3933 11.3333L7.99998 8.94001L5.60665 11.3333L4.66665 10.3933L7.05998 8.00001L4.66665 5.60668L5.60665 4.66668L7.99998 7.06001L10.3933 4.66668L11.3333 5.60668L8.93998 8.00001L11.3333 10.3933Z"
          fill="currentcolor"
        />
      </svg>
    );

    return (
      <span
        className={className}
        css={[
          style.root,
          variant === "number" ? style.number : null,
          variant === "text" ? style.text : null,
          variant === "tag" ? style.tag : null,
          style.color(color),
          customCss,
        ]}
        ref={ref}
        {...props}
      >
        <>
          <span css={style.chipLabel} className="chip-label" ref={labelRef}>
            {label}
          </span>
        </>
        {onDelete && deleteIcon}
      </span>
    );
  }
);

export default Chip;
