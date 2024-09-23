import { Input, InputProps, css } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface EditableTypoProps extends InputProps {
  onValueChange?: (value: string) => void;
  editable?: boolean;
  onEditChange?: (is: boolean) => void;
  onEditEnd?: () => void;
  onEditStart?: () => void;
  defaultValue?: string;
}

const MuiEditableText = ({
  onValueChange,
  editable: inputEditable,
  onEditChange,
  onEditEnd,
  onEditStart,
  defaultValue: inputDefaultValue,
  ...props
}: EditableTypoProps) => {
  const [editable, setEditable] = useState(Boolean(inputEditable));
  const defaultValue = useRef<undefined | string>(inputDefaultValue);
  const el = useRef<undefined | HTMLInputElement>(null);

  useEffect(() => {
    if (inputEditable !== editable) {
      setEditable(!!inputEditable);
      if (inputEditable) {
        el.current?.focus();
        el.current?.setSelectionRange(0, -1);
      }
    }
  }, [inputEditable]);

  const handleEditStart = () => {
    setEditable(true);

    onEditChange && onEditChange(true);
    onEditStart && onEditStart();
  };

  const handleEditEnd = () => {
    setEditable(false);
    onEditChange && onEditChange(false);
    onEditEnd && onEditEnd();

    if (!props.value && defaultValue.current) {
      onValueChange && onValueChange(defaultValue.current);
    } else {
      defaultValue.current = inputDefaultValue;
    }
  };

  return (
    <Input
      disableUnderline
      {...props}
      inputRef={el}
      css={
        editable ||
        css`
          input {
            user-select: none;
            ::selection {
              background-color: transparent;
            }
          }
        `
      }
      onChange={(e) => {
        props.onChange && props.onChange(e);

        onValueChange && onValueChange(e.target.value);
      }}
      readOnly={!editable}
      onDoubleClick={(e) => {
        props.onDoubleClick && props.onDoubleClick(e);

        handleEditStart();
      }}
      onBlur={(e) => {
        props.onBlur && props.onBlur(e);

        handleEditEnd();
      }}
      onKeyDown={(e) => {
        props.onKeyDown && props.onKeyDown(e);

        switch (e.key) {
          case "Enter": {
            handleEditEnd();
            return;
          }
          case "Escape": {
            if (defaultValue.current) {
              onValueChange && onValueChange(defaultValue.current);
              handleEditEnd();
            }
            return;
          }
        }
      }}
    />
  );
};

export default MuiEditableText;
