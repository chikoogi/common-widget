import styled from "./style";

const LoadingDot = () => {
  return (
    <div css={styled.wrapper}>
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingDot;
