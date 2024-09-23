import styled from "./style.ts";
import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Divider from "@components/atoms/Divider/Divider.tsx";

interface CustomMenuProps {
  open: boolean;
  onClose: () => void;
  items: MenuItem[];
  el: HTMLElement | null;
  disablePortal?: boolean;
}

export interface MenuItem {
  title: ReactNode;
  submenu?: MenuItem[];
  onClick?: () => void;
}

const CustomMenuItem = ({
  item,
  el,
  onClose,
}: {
  item: MenuItem;
  el: HTMLElement | null;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const onMouseEnter = () => {
    setOpen(true);
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  if (!item.title) return <Divider color={"#E8EAED"} css={styled.divider} />;
  return (
    <div css={styled.menuItemWrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div
        css={styled.menuItemTitle}
        onClick={() => {
          item.onClick && item.onClick();
          !item.submenu && onClose();
        }}
      >
        <span>{item.title}</span>
        {item.submenu ? <div> &lt; </div> : <div />}
      </div>
      {open && item.submenu && (
        <div
          css={styled.wrapper}
          style={{
            position: "absolute",
            left: "100%",
            top: -8,
          }}
        >
          <div css={styled.subWrapper}>
            {item.submenu.map((subItem: any, index: any) => (
              <CustomMenuItem key={index} item={subItem} el={el} onClose={onClose} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CustomMenu = ({ open, onClose, items, el, disablePortal }: CustomMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (el) {
      const rect = el.getBoundingClientRect();
      setPosition({ top: rect.bottom, left: rect.left });

      const handleClickOutside = (e: any) => {
        if (e.target) {
          const target = e.target;
          if (el && !divRef.current?.contains(target as Node) && !el.contains(target as Node))
            onClose();
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [el]);

  return (
    <>
      {open &&
        createPortal(
          <div
            css={styled.wrapper}
            style={{
              position: "absolute",
              left: position.left,
              top: position.top,
            }}
            ref={divRef}
          >
            <div css={styled.subWrapper}>
              {items.map((item: MenuItem, idx: number) => {
                return <CustomMenuItem item={item} el={anchorEl} key={idx} onClose={onClose} />;
              })}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default CustomMenu;
