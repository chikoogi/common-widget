import {
  BlockPicker,
  ChromePicker,
  CompactPicker,
  MaterialPicker,
  SketchPicker,
  TwitterPicker,
} from "react-color";
import { OnChangeHandler } from "react-color/lib/components/common/ColorWrap";
import { useState } from "react";

import styled from "./style";

interface ColorPickerProps {
  type: string;
  value?: string;
  showValue?: boolean;
  onChange?: OnChangeHandler;
  onChangeComplete?: OnChangeHandler;
  disabled?: boolean;
  customCss?: any;
}

const ColorPicker = ({ type, value, onChange, onChangeComplete, customCss }: ColorPickerProps) => {
  const [tmpColor, setTmpColor] = useState(value);
  const [hover, setHover] = useState(false);

  if (type === "sketch") {
    return <SketchPicker color={value} onChange={onChange} onChangeComplete={onChangeComplete} />;
  } else if (type === "block") {
    return <BlockPicker color={value} onChange={onChange} onChangeComplete={onChangeComplete} />;
  } else if (type === "compact") {
    return (
      <div
        css={[styled.root, customCss && customCss]}
        onMouseOver={() => {
          setTmpColor(value);
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        <CompactPicker
          color={hover && tmpColor ? tmpColor : value}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
          onSwatchHover={(color, e) => {
            setTmpColor(color.hex);
          }}
          // styles={{ compact: { boxShadow: "none" } }}
        />
      </div>
    );
  } else if (type === "twitter") {
    return <TwitterPicker color={value} onChange={onChange} onChangeComplete={onChangeComplete} />;
  } else if (type === "material") {
    return <MaterialPicker color={value} onChange={onChange} onChangeComplete={onChangeComplete} />;
  } else if (type === "chrome") {
    return <ChromePicker color={value} onChange={onChange} onChangeComplete={onChangeComplete} />;
  } else return <></>;
};

export default ColorPicker;
