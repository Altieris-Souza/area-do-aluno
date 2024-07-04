"use client";
import React from "react";
import { LabelText, StyledInput, StyledLabel } from "./style";
import ContainerFormAdmin from "../ContainerFormAdmin/ContainerFormAdmin";
import ButtonAdmin from "../ButtonAdmin/ButtonAdmin";
import ButtonForm from "../ButtonForm/ButtonForm";

const FormCreateCourse = () => {
  return (
    <>
      <ContainerFormAdmin>
        <h1 style={{ color: "#30a7a0", padding: "20px" }}>Criar Curso</h1>
        <StyledLabel>
          <LabelText>Nome</LabelText>
          <StyledInput placeholder="Insira o texto"></StyledInput>
        </StyledLabel>
        <StyledLabel>
          <LabelText>Preço</LabelText>
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

export default FormCreateCourse;
