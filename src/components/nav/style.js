import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  position: relative;
  height: 50px;
  background-color: #ededed;
`;

export const DivX = styled.div`
  position: absolute;
  left: 0;
  margin-left: 35.6px;
`;

export const ImgCadastro = styled.img`
  width: 14.01px;
  height: 14.31px;
`;

export const ButtonX = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const DivModal = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

export const ButtonModalSim = styled.button`
  padding: 10px 20px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: darkorange;
  }
`;
