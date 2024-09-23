import styled from "./style";
import { DialogActions } from "@mui/material";
import { forwardRef } from "react";

const Footer = forwardRef(
  ({ className, children, css, ...props }: any, ref: React.Ref<HTMLDivElement>) => {
    return (
      <DialogActions className={className} css={[styled.wrapper, css]} ref={ref} {...props}>
        {children}
      </DialogActions>
    );
  }
);

export default Footer;
