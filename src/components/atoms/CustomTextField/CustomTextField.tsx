import React, { useState } from "react";
import style from "./style";
import { HWTextFieldProps } from "./type";

function validateValue(value?: string | number | readonly string[]) {
  if (value === undefined) {
    return false;
  }
  if (typeof value === "string") {
    return Boolean(value);
  }
  if (typeof value === "number") {
    return !isNaN(value);
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
}

const CustomTextField = React.forwardRef(
  (
    {
      className,
      customCss,
      id,
      label,
      labelOverflowInherit = false,
      width = "400px",
      shrink: shrinkProps = false,
      value: valueProps,
      placeholder,
      fullWidth = false,
      type = "text",
      size = "medium",
      error = false,
      helperText,
      readOnly = false,
      disabled = false,
      startAdorment,
      endAdorment,
      onChange,
      inputRef,
      inputProps,
      maxLength,
      ...props
    }: HWTextFieldProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [nativeShrink, setShrink] = useState(shrinkProps);
    const [nativeValue, setInnerValue] = useState<string | number | readonly string[] | undefined>(
      valueProps
    );

    const value = valueProps !== undefined ? valueProps : nativeValue;

    const shrink =
      (nativeShrink || validateValue(value) || shrinkProps || startAdorment !== undefined) &&
      Boolean(label);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      const { value } = e.target;
      setInnerValue(value);
      if (onChange) {
        onChange(e);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      // 마우스가 input 위에 있을 때 외부 스크롤 이벤트 방지
      // 예를 들어 input에서 스크롤로 숫자 바꿀 시 화면 스크롤 방지
      // 모든 type에서 필요하면 if문 제거
      if (type === "number") {
        e.target.addEventListener(
          "wheel",
          function (e) {
            e.stopPropagation();
          },
          { passive: false }
        );
      }

      setShrink(true);

      if (inputProps?.onFocus) {
        inputProps?.onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setShrink(false);

      if (inputProps?.onBlur) {
        inputProps?.onBlur(e);
      }
    };

    let classNames = [];
    classNames.push(
      "HW-Outlined-TextField-Container",
      disabled ? "HW-disabled" : null,
      error ? "HW-Error" : null,
      readOnly ? "HW-ReadOnly" : null,
      className ? `${className}` : null
    );
    classNames = classNames.filter(Boolean);

    return (
      <div
        ref={ref}
        css={[style.container(width, fullWidth), customCss]}
        className={classNames.join(" ")}
        data-shrink={shrink}
        {...props}
      >
        {label &&
          (labelOverflowInherit ? (
            <div css={style.labelOverflowInherit} className="HW-Outlined-TextField-Label">
              {label}
              {props.required && <span style={{ color: "red" }}>*</span>}
            </div>
          ) : (
            <div css={style.label} className="HW-Outlined-TextField-Label">
              {label}
              {props.required && <span style={{ color: "red" }}>*</span>}
            </div>
          ))}
        <div className="HW-Outlined-TextFiled-Wrapper" css={style.wrapper(size)}>
          <div className="HW-Outlined-TextField-Contents" css={style.contents(size)}>
            {startAdorment && (
              <div className="HW-Outlined-TextField-StartAdorment" css={style.startAdorment}>
                {startAdorment}
              </div>
            )}
            <input
              {...inputProps}
              className={["HW-Outlined-TextField-Input", inputProps?.className]
                .filter(Boolean)
                .join(" ")}
              css={[style.input(size), inputProps?.customCss]}
              ref={inputRef}
              id={id}
              value={value}
              type={type}
              // data-placeholder={!Boolean(label) || shrink}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              readOnly={readOnly}
              disabled={disabled}
              maxLength={maxLength}
            />
            {endAdorment && (
              <div className="HW-Outlined-TextField-EndAdorment" css={style.endAdorment}>
                {endAdorment}
              </div>
            )}
          </div>
        </div>
        {helperText && (
          <p className="HW-Outlined-TextField-HelperText" css={style.helperText}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

export default CustomTextField;
