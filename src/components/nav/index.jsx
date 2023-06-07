import React from "react";
import { ButtonX, DivX, ImgCadastro, Nav } from "./style";
import { Column, DFlex } from "../../pages/homeStyle";
import { ButtonEntrar, ContentP } from "../../pages/cadastroStyle";
import { gotoLogin, gotoPosts } from "../../routes/coordinator";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import lab1 from "../../assets/Vector.png";
import lab2 from "../../assets/Vector (1).png";
import lab3 from "../../assets/Vector (2).png";
import lab4 from "../../assets/Vector (3).png";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  let entrarLogout;
  let icon;

  if (location.pathname === "/posts") {
    entrarLogout = (
      <ButtonEntrar
        onClick={() => {
          localStorage.removeItem("token");
          gotoLogin(navigate);
        }}
      >
        Logout
      </ButtonEntrar>
    );
  } else if (location.pathname === "/cadastro") {
    entrarLogout = (
      <ButtonEntrar
        onClick={() => {
          gotoLogin(navigate);
        }}
      >
        Entrar
      </ButtonEntrar>
    );
  } else if (location.pathname === `/posts/${id}/comentarios`) {
    entrarLogout = (
      <ButtonEntrar
        onClick={() => {
          localStorage.removeItem("token");
          gotoLogin(navigate);
        }}
      >
        Logout
      </ButtonEntrar>
    );
    icon = <AiOutlineClose size={30} color="#A3A3A3" />;
  }

  return (
    <Nav>
      <DivX>
        <ButtonX onClick={() => gotoPosts(navigate)}>{icon}</ButtonX>
      </DivX>
      <Column>
        <DFlex>
          <ImgCadastro src={lab1} alt="" />
          <ImgCadastro src={lab2} alt="" />
        </DFlex>
        <DFlex>
          <ImgCadastro src={lab3} alt="" />
          <ImgCadastro src={lab4} alt="" />
        </DFlex>
      </Column>
      <ContentP>{entrarLogout}</ContentP>
    </Nav>
  );
}

export default Navbar;
