import styled, { keyframes } from "styled-components";

export const ContainerPostsComments = styled.div`
  width: 428px;
  min-height: 926px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCardComments = styled.div`
  margin-top: 28px;
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

export const ButtonComments = styled.button`
  width: 365px;
  font-family: "Noto Sans";
  height: 51px;
  border-radius: 27px;
  padding: 13px 133px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 18px;
  line-height: 24.52px;
  margin-top: 8px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  transition: background 300ms ease-out;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #f9b24e 0%, #ff6489 100%);
  }
  &:active {
    animation-name: ${clickAnimation};
    animation-duration: 300ms;
    animation-timing-function: ease-out;
  }
`;

export const TextareaComments = styled.textarea`
  margin-top: 12px;
  width: 364px;
  height: 131px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23.4px;
  border-radius: 12px;
  background-color: #ededed;
  border: none;
  padding: 18px 0 0 17px;
  ::placeholder {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23.4px;
    color: #6f6f6f;
  }
  &:focus {
    outline: none;
  }
`;

export const HrComments = styled.hr`
  margin-top: 16px;
  width: 363.01px;
  border-width: 1px;
  border-image: linear-gradient(90deg, #ff6489, #f9b24e) 1;
`;

export const ContainerComments = styled.div`
    margin-top: 36px;
`