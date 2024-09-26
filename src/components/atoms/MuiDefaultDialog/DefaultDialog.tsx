import styled from "./style.ts";
import { Dialog } from "@mui/material";
import { MouseEvent } from "react";
import Header from "./Header/Header.tsx";
import Content from "./Content/Content.tsx";
import Footer from "./Footer/Footer.tsx";

const MainDialog = ({ className, children, width = "460px", height, ...props }: any) => {
  const handleMouseDownBackDrop = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <Dialog
      onMouseDown={handleMouseDownBackDrop}
      className={className}
      css={[styled.wrapper(width, height)]}
      {...props}
    >
      {children}
    </Dialog>
  );
};

const DefaultDialog = Object.assign(MainDialog, {
  Header: Header,
  Content: Content,
  Footer: Footer,
});

export default DefaultDialog;
