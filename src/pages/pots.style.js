import styled from "styled-components";
import "typeface-ibm-plex-sans";

export const ContainerPosts = styled.div`
  width: 428px;
  min-height: 926px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerText = styled.div`
  margin-top: 32px;
`;
export const Textarea = styled.textarea`
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
  padding: 18px 10px 0 17px;
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
export const ContainerButtonPostar = styled.div`
  margin-top: 12px;
`

export const HrPosts = styled.hr`
  margin-top: 32px;
  width: 363.01px;
  margin-bottom: 26px;
  border-width: 1px;
  border-image: linear-gradient(90deg, #ff6489, #f9b24e) 1;
`;
