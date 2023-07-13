import React, { useState } from "react";
import { css } from "@emotion/react";
import {
  ContainerCadastrarButton,
  ContainerFormCadastro,
  ContainerInfos,
  ContainerSendEmail,
  ContentError,
  InputCheckBox,
  PCadastro,
  PCheckBox,
  Span,
} from "./style";
import { ButtonContinue, Input } from "../form/style";
import axios from "axios";
import { gotoPosts } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../contants/url";
import { BeatLoader } from "react-spinners";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";

const override = css`
  display: inline-block;
  margin-left: 5px;
`;

function FormCadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validatePassword = (password) => {
    let error = "";
    if (!passwordRegex.test(password)) {
      error = "A senha não atende aos requisitos.";
    }
    setPasswordError(error);
  };

  const SubmitCadastrar = async (event) => {
    event.preventDefault();
    if (passwordError) {
      alert("A senha não atende aos requisitos.");
      return;
    } else {
      setLoading(true);
      try {
        const result = await axios.post(`${BASE_URL}/users/signup`, {
          name: name,
          email: email,
          password: password,
        });
        const token = result.data.token;
        localStorage.setItem("token", token);
        setOpenSnackbar(true);
        setTimeout(() => {
          gotoPosts(navigate);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <ContainerFormCadastro onSubmit={SubmitCadastrar}>
      <Input
        type="text"
        placeholder="Apelido"
        onChange={onChangeName}
        value={name}
        pattern="^[a-zA-Z0-9]{3,20}$"
        required
      />
      <Input
        type="text"
        placeholder="Email"
        onChange={onChangeEmail}
        value={email}
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        required
      />
      <Input
        type="password"
        placeholder="Senha"
        onChange={onChangePassword}
        value={password}
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        required
      />
      <ContentError style={{ color: "red" }}>{passwordError}</ContentError>
      <ContainerInfos>
        <PCadastro>
          Ao continuar, você concorda com a nossa{" "}
          <Span>Contrato de usuário</Span> e nossa{" "}
          <Span>Política de Privacidade</Span>
        </PCadastro>
      </ContainerInfos>
      <ContainerSendEmail>
        <InputCheckBox type="checkbox" name="sendEmail" id="sendEmail" />
        <PCheckBox>
          Eu concordo em receber emails sobre coisas legais no Labeddit
        </PCheckBox>
      </ContainerSendEmail>
      <ContainerCadastrarButton>
        <ButtonContinue>
          {loading ? (
            <>
              <BeatLoader
                css={override}
                size={10}
                color={"#ffffff"}
                loading={loading}
              />
            </>
          ) : (
            <span>Cadastrar</span>
          )}
        </ButtonContinue>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <SnackbarContent
            style={{ backgroundColor: "#4caf50" }}
            message="Cadastro realizado com sucesso."
          />
        </Snackbar>
      </ContainerCadastrarButton>
    </ContainerFormCadastro>
  );
}

export default FormCadastro;
