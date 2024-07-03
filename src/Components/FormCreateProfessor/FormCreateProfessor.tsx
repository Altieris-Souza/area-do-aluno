"use client";
import React from "react";
import { LabelText, StyledInput, StyledLabel } from "./style";
import ContainerFormAdmin from "../ContainerFormAdmin/ContainerFormAdmin";
import ButtonAdmin from "../ButtonAdmin/ButtonAdmin";
import ButtonForm from "../ButtonForm/ButtonForm";

const FormCreateProfessor = () => {
  return (
    <>
      <ContainerFormAdmin>
        <h1 style={{ color: "#30a7a0", padding: "20px" }}>Criar Professor</h1>
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
          <LabelText>Rg</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>Celular</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>Password</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>Sexo</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>

        <ButtonForm
          onClick={() => {
            console.log("Altieris");
          }}
          text="Criar"
        ></ButtonForm>
      </ContainerFormAdmin>
    </>
  );
};

export default FormCreateProfessor;
