import styled from "./style.ts";
import { TextareaHTMLAttributes } from "react";

interface StyledTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
}

const TextAreaStyledA = ({ value, ...props }: StyledTextAreaProps) => {
  return <textarea css={styled.textarea} rows={3} value={value} {...props} />;
};

export default TextAreaStyledA;
