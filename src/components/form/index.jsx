import React from "react";
import { css } from "@emotion/react";
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
import { BASE_URL } from "../../contants/url";
import { BeatLoader } from "react-spinners";

const override = css`
  display: inline-block;
  margin-left: 5px;
`;

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const result = await axios.post(`${BASE_URL}/users/login`, {
        email: email,
        password: password,
      });
      const token = result.data.token;
      localStorage.setItem("token", token);
      gotoPosts(navigate);
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errorMessage = err.response.data;
        alert(errorMessage);
        setLoading(false);
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
        required
      />
      <ColumnForm>
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
            <span>Continue</span>
          )}
        </ButtonContinue>
        <Hr />
        <ButtonCreate onClick={() => gotoCreateAccount(navigate)}>
          Crie uma conta!
        </ButtonCreate>
      </ColumnForm>
    </ContainerForm>
  );
}

export default Form;
