import React from "react";
import { ContainerCadastro, ContainerTitle, Title } from "./cadastroStyle";
import FormCadastro from "../components/formCadastro";
import Navbar from "../components/nav";

function Cadastro() {
  return (
    <ContainerCadastro>
      <Navbar />
      <ContainerTitle>
        <Title>Olá, boas vindas ao LabEddit ;)</Title>
      </ContainerTitle>
      <FormCadastro />
    </ContainerCadastro>
  );
}

export default Cadastro;
