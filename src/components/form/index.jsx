import React from "react";
import {
  ButtonContinue,
  ButtonCreate,
  ColumnForm,
  ContainerForm,
  Hr,
  Input,
} from "./style";
import { useNavigate } from "react-router-dom";
import { gotoCreateAccount, gotoPosts } from "../../routes/coordinator";
import { useState } from "react";
import axios from "axios";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeNameLogin = (event) => {
    setEmail(event.target.value);
  };
  const onChangePasswordLogin = (event) => {
    setPassword(event.target.value);
  };

  const SubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:3003/users/login", {
        email: email,
        password: password,
      });
      const token = result.data.token;
      localStorage.setItem("token", token);
      gotoPosts(navigate);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errorMessage = err.response.data;
        alert(errorMessage);
      } else {
        console.log(err);
        alert("Erro inesperado");
      }
    }
  };

  return (
    <ContainerForm onSubmit={SubmitLogin}>
      <Input
        type="text"
        placeholder="Email"
        onChange={onChangeNameLogin}
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        required
      />
      <Input
        type="password"
        placeholder="Senha"
        onChange={onChangePasswordLogin}
        // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        required
      />
      <ColumnForm>
        <ButtonContinue>Continuar</ButtonContinue>
        <Hr />
        <ButtonCreate onClick={() => gotoCreateAccount(navigate)}>
          Crie uma conta!
        </ButtonCreate>
      </ColumnForm>
    </ContainerForm>
  );
}

export default Form;
