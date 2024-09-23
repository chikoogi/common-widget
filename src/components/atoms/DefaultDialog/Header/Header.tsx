import styled from "./style";
import { forwardRef, Ref } from "react";
import { DialogTitle } from "@mui/material";
import Typography from "@components/atoms/Typography/Typography";
import ButtonIcon from "@components/atoms/ButtonIcon/ButtonIcon";
import { Close } from "@mui/icons-material";

const Header = forwardRef(
  ({ className, children, onClose, css, ...props }: any, ref: Ref<HTMLSpanElement>) => {
    return (
      <DialogTitle className={className} css={[styled.wrapper, css]} ref={ref} {...props}>
        <Typography>{children}</Typography>
        {onClose ? (
          <ButtonIcon aria-label="close" onClick={onClose} css={[styled.escapeBtn]}>
            <Close width={24} height={24} />
          </ButtonIcon>
        ) : null}
      </DialogTitle>
    );
  }
);

export default Header;
