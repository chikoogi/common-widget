import { DialogContent } from "@mui/material";
import { forwardRef, Ref } from "react";
import styled from "./style";

const Content = forwardRef(
  ({ className, children, dividers, css, ...props }: any, ref: Ref<HTMLDivElement>) => {
    return (
      <DialogContent
        className={className}
        ref={ref}
        css={[styled.wrapper, css]}
        dividers={dividers}
        {...props}
      >
        {children}
      </DialogContent>
    );
  }
);

export default Content;
