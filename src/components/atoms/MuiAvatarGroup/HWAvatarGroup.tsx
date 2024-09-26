import styled from "./style";

const HWAvatarGroup = ({ max, size = "24px", direction ="left", children, customCss }: any) => {
  return (
    <div className="HWAvatar-group-wrapper" css={[styled.wrapper(size, direction), customCss]}>
      {children.slice(0, max || children.length)}
      {children.length > max && (
        <div className={"HWAvatar-group-circle"} css={styled.maxCircle}>
          +{children.length - max}
        </div>
      )}
    </div>
  );
};

export default HWAvatarGroup;
