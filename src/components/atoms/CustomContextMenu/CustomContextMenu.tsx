import styled from "./style.ts";
import { ReactNode } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useContextMenuHooks } from "@src/hooks/contextMenuHooks.ts";

export interface MenuItemProps {
  id: number;
  title: ReactNode;
  onClick?: () => void;
}

const CustomContextMenu = ({
  items,
  children,
}: {
  items: MenuItemProps[];
  children: ReactNode;
}) => {
  const { contextMenu, handleContextMenu, handleClose } = useContextMenuHooks();

  return (
    <div css={styled.wrapper} onContextMenu={handleContextMenu}>
      <div>{children}</div>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
        }
        css={styled.tabMenu}
      >
        {items.map((item: MenuItemProps) => (
          <MenuItem
            key={item.id}
            onClick={() => {
              item.onClick && item.onClick();
              handleClose();
            }}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomContextMenu;
