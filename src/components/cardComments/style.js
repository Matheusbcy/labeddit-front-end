import styled from "styled-components";
import "typeface-ibm-plex-sans";

export const ContainerCardComments = styled.div`
  width: 364px;
  max-height: 189.89px;
  padding: 9px 10px;
  margin-bottom: 10px;
  display: flex;
  background-color: #fbfbfb;
  flex-direction: column;
  gap: 18px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
`;
export const PCardComments = styled.p`
  font-size: 12px;
  overflow-y: hidden;
  font-family: "IBM Plex Sans";
  color: #6f6f6f;
  line-height: 15.6px;
  font-weight: 400;
`;
export const TitleCardComments = styled.h2`
  font-size: 18px;
  overflow-y: hidden;
  width: 335px;
  font-family: "IBM Plex Sans";
  font-weight: 400;
  line-height: 23.4px;
`;
export const ContainerLikeDeslieComments = styled.div`
  width: 174px;
  height: 28px;
  display: flex;
  gap: 11px;
`;
export const LikeDeslikeComments = styled.div`
  height: 100%;
  width: 98px;
  border: 0.79px solid #ECECEC;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13.62px;
  padding-left: 4px;
`
export const ButtonImgComments = styled.button`
  background: none;
  display: flex;
  border: none;
  &:hover {
    cursor: pointer;
  }
`
export const ImgLikeDeslieComments = styled.img`
  width: 13.94px;
  height: 13.94px;
`
export const PLikeComments = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 9.56px;
  color: #6F6F6F;
`
