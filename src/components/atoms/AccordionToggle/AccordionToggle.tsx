import styled from "./style.ts";
import { ReactNode } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

interface AccordionToggleProps {
  title: string;
  isExpanded: boolean;
  switchExpanded: (value: boolean) => void;
  children: ReactNode;
  disabled?: boolean;
}

const AccordionToggle = ({
  title,
  isExpanded,
  switchExpanded,
  children,
  disabled = false,
}: AccordionToggleProps) => {
  return (
    <div css={styled.wrapper}>
      <div css={styled.titleWrapper} onClick={() => !disabled && switchExpanded(!isExpanded)}>
        <div>{title}</div>
        <ToggleButtonGroup value={isExpanded} exclusive css={styled.toggleBtnGroup}>
          <ToggleButton value={true}>On</ToggleButton>
          <ToggleButton value={false}>Off</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div css={styled.contentWrapper(isExpanded)}>{children}</div>
    </div>
  );
};

export default AccordionToggle;
