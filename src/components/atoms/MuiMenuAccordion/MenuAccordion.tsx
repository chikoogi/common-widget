import React, { HTMLAttributes } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "./style";

interface SideMenuAccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "title"> {
  title?: React.ReactNode;
  isExpanded?: boolean;
  switchExpanded?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  customCss?: any;
}

const SkeletonUI = () => (
  <div className="accordion-skeleton-wrapper">
    <div className="accordion-skeleton title" />
    <div className="accordion-skeleton" />
    <div className="accordion-skeleton" />
  </div>
);

const MenuAccordion = React.forwardRef<HTMLDivElement, SideMenuAccordionProps>(
  (
    {
      title,
      isExpanded = false,
      switchExpanded,
      children,
      disabled = false,
      customCss,
      // delay = false,
      ...props
    },
    ref
  ) => {
    return (
      <Accordion
        ref={ref}
        css={[styled.rootStyle, customCss]}
        square
        expanded={isExpanded}
        onChange={switchExpanded}
        disabled={disabled}
        TransitionProps={{ unmountOnExit: true }}
        {...props}
      >
        <AccordionSummary
          css={styled.summaryStyle}
          expandIcon={<ExpandMoreIcon className={"i-chevron-24"} />}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails css={styled.detailStyle}>{children}</AccordionDetails>
      </Accordion>
    );
  }
);

MenuAccordion.displayName = "MenuAccordion";

export default MenuAccordion;
