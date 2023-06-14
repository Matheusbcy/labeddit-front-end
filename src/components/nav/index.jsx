import React from "react";
import {
  ButtonModalSim,
  ButtonX,
  DivModal,
  DivX,
  ImgCadastro,
  Nav,
} from "./style";
import { Column, DFlex } from "../../pages/homeStyle";
import { ButtonEntrar, ContentP } from "../../pages/cadastroStyle";
import { gotoLogin, gotoPosts } from "../../routes/coordinator";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import lab1 from "../../assets/Vector.png";
import lab2 from "../../assets/Vector (1).png";
import lab3 from "../../assets/Vector (2).png";
import lab4 from "../../assets/Vector (3).png";
import { AiOutlineClose } from "react-icons/ai";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let entrarLogout;
  let icon;

  if (location.pathname === "/posts") {
    entrarLogout = <ButtonEntrar onClick={handleOpen}>Logout</ButtonEntrar>;
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
    entrarLogout = <ButtonEntrar onClick={handleOpen}>Logout</ButtonEntrar>;
    icon = <AiOutlineClose size={30} color="#A3A3A3" />;
  }

  const exluiToken = () => {
    localStorage.removeItem("token");
    gotoLogin(navigate);
  };

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tem certeza que deixa sair?
          </Typography>
          <DivModal>
            <ButtonModalSim onClick={exluiToken}>sim</ButtonModalSim>
            <ButtonModalSim onClick={handleClose}>não</ButtonModalSim>
          </DivModal>
        </Box>
      </Modal>
    </Nav>
  );
}

export default Navbar;
