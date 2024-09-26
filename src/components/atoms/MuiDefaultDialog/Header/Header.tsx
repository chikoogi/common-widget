import styled from "./style";
import { forwardRef, Ref } from "react";
import { DialogTitle } from "@mui/material";
import TypographyA from "@components/atoms/TypographyA/TypographyA.tsx";
import MuiButtonIcon from "@components/atoms/MuiButtonIcon/MuiButtonIcon.tsx";
import { Close } from "@mui/icons-material";

const Header = forwardRef(
  ({ className, children, onClose, css, ...props }: any, ref: Ref<HTMLSpanElement>) => {
    return (
      <DialogTitle className={className} css={[styled.wrapper, css]} ref={ref} {...props}>
        <TypographyA>{children}</TypographyA>
        {onClose ? (
          <MuiButtonIcon aria-label="close" onClick={onClose} css={[styled.escapeBtn]}>
            <Close width={24} height={24} />
          </MuiButtonIcon>
        ) : null}
      </DialogTitle>
    );
  }
);

export default Header;
