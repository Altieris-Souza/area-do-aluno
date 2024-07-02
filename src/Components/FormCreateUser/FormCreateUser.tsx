"use client";
import React from "react";
import { LabelText, StyledInput, StyledLabel } from "./style";
import ContainerFormAdmin from "../ContainerFormAdmin/ContainerFormAdmin";
import ButtonAdmin from "../ButtonAdmin/ButtonAdmin";

const FormCreateUser = () => {
  return (
    <>
      <ContainerFormAdmin>
        <h1 style={{ color: "#30a7a0", padding: "20px" }}>Criar Usuário</h1>
        <StyledLabel>
          <LabelText>Nome</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>E-mail</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>Cpf</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>Data</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>Sei lá</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>E-mail</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>E-mail</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <ButtonAdmin
          onClick={() => {
            console.log("Altieris");
          }}
          text="Criar"
        ></ButtonAdmin>
      </ContainerFormAdmin>
    </>
  );
};

export default FormCreateUser;
