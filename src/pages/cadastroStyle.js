import styled, { keyframes } from "styled-components";
import "typeface-ibm-plex-sans";

export const ContainerCadastro = styled.div`
  width: 428px;
  min-height: 926px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentP = styled.div`
  position: absolute;
  right: 0;
  margin-right: 29px;
`;

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const ButtonEntrar = styled.button`
  width: 55px;
  height: 25px;
  font-family: "Noto Sans";
  color: #4088cb;
  font-weight: 600;
  font-size: 18px;
  line-height: 24.52px;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    animation: ${clickAnimation} 0.3s ease;
  }
`;

export const ContainerTitle = styled.div`
  margin-top: 29px;
  margin-left: 32px;
`;
export const Title = styled.h1`
  font-size: 33px;
  font-weight: 700;
  font-family: "IBM Plex Sans";
  width: 364px;
  line-height: 42.9px;
  color: #373737;
`;
