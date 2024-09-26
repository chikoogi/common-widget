import styled from "./style";
import { SerializedStyles } from "@emotion/react";

interface SpeechBubbleProps {
  customCss?: SerializedStyles;
  children: React.ReactNode | string;
}

const SpeechBubble = ({ customCss, children }: SpeechBubbleProps) => {
  return <div css={[styled.wrapper, customCss]}>{children}</div>;
};

export default SpeechBubble;
