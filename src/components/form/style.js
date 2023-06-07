import styled, { keyframes } from "styled-components";

export const ContainerForm = styled.form`
  margin-top: 107px;
  margin-left: 32px;
`;
export const Input = styled.input`
  width: 363px;
  height: 60px;
  font-family: "Noto Sans";
  padding: 0px 0px 0px 17px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  margin-bottom: 8px;
  color: black;
  font-weight: 700;
  line-height: 22px;
  border: 1px solid #d5d8de;
  ::placeholder {
    padding: 17px 29px 266px 9px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #323941;
  }
  &:focus {
    outline: none;
  }
`;
export const ColumnForm = styled.div`
  display: flex;
  margin-top: 56px;
  flex-direction: column;
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

export const ButtonContinue = styled.button`
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
const dissolveAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ButtonCreate = styled.button`
  width: 365px;
  font-family: "Noto Sans";
  height: 51px;
  margin-top: 20px;
  border-radius: 27px;
  color: #fe7e02;
  font-weight: 700;
  font-size: 18px;
  line-height: 24.52px;
  border: 1px solid #fe7e02;
  background-color: transparent;
  transition: background 300ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #fe7e02;
    color: #fff;
  }

  &:active {
    animation-name: ${dissolveAnimation};
    animation-duration: 300ms;
    animation-timing-function: ease-out;
  }
`;

export const Hr = styled.hr`
  margin-top: 18px;
  width: 363.01px;
  border-width: 1px;
  border-image: linear-gradient(90deg, #ff6489, #f9b24e) 1;
`;
