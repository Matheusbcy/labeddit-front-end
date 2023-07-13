import React from "react";
import { Column, ContainerHome, DFlex, H2, P } from "./homeStyle";
import lab1 from "../assets/Vector.png";
import lab2 from "../assets/Vector (1).png";
import lab3 from "../assets/Vector (2).png";
import lab4 from "../assets/Vector (3).png";
import Form from "../components/form";
import SendPost from "../sendPost"

function Home() {
  SendPost()
  return (
    <ContainerHome>
      <Column>
        <DFlex>
          <img src={lab1} alt="" />
          <img src={lab2} alt="" />
        </DFlex>
        <DFlex>
          <img src={lab3} alt="" />
          <img src={lab4} alt="" />
        </DFlex>
      </Column>
      <H2>LabEddit</H2>
      <P>O projeto de rede social da Labenu</P>
      <Form />
    </ContainerHome>
  );
}

export default Home;
