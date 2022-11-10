import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in;
`;

const SpinLoader = styled.span`
  width: 110px;
  height: 110px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #472d2d;
  border-radius: 50%;
  display: block;
  text-indent: -999999px;
  animation: ${rotate} 1s linear infinite;
`;

export { SpinnerContainer, SpinLoader };
