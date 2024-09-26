import { useRef, useState } from "react";
import styled from "./style.ts";

const AnimationModal = () => {
  const [isModal, setIsModal] = useState(false);
  const [animation, setAnimation] = useState("");
  const [modalHeight, setModalHeight] = useState(750); // 초기 모달 높이

  const modalRef = useRef<HTMLDivElement | null>(null);

  const startResize = (downEvent: React.MouseEvent<HTMLDivElement>) => {
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.clientY - downEvent.clientY;
      const height = modalHeight - deltaY;
      if (height < 200) {
        setAnimation("closeAnimation");
        setTimeout(() => setIsModal(false), 500);
      } else if (height > 900) {
        return;
      } else {
        setModalHeight(height);
      }
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });
  };

  return (
    <>
      {isModal && (
        <div css={styled.modal(modalHeight, isModal)} className={animation}>
          <div css={[styled.modalWrapper]} ref={modalRef}>
            <div css={styled.heightHandler} onMouseDown={startResize} />
          </div>
        </div>
      )}
    </>
  );
};

export default AnimationModal;
