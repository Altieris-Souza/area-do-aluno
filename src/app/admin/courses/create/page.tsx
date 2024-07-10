"use client";

import ContainerFormAdmin from "@/Components/ContainerFormAdmin/ContainerFormAdmin";
import {
  GlobalStyle,
  LabelText,
  MainDiv,
  StyledInput,
  StyledLabel,
} from "./style";
import ButtonForm from "@/Components/ButtonForm/ButtonForm";
import { useState } from "react";
import { ICourse } from "@/utils/interface";
import useCourseStore from "@/Stores/courseStore";
import { useRouter } from "next/navigation";

export default function Create() {
  const { create } = useCourseStore();

  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");

  const handleCreate = async () => {
    const course: ICourse = {
      id: 0,
      name: name,
      field: department,
      active: false,
    };

    try {
      await create(course);

      router.push("/admin/courses");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <MainDiv>
        <ContainerFormAdmin>
          <h1 style={{ color: "#30a7a0", padding: "20px" }}>Criar curso</h1>
          <StyledLabel>
            <LabelText>Nome:</LabelText>
            <StyledInput
              placeholder="Insira o nome"
              onChange={(e) => setName(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>Departamento:</LabelText>
            <StyledInput
              placeholder="Insira o departamento"
              type="text"
              onChange={(e) => setDepartment(e.target.value)}
            ></StyledInput>
          </StyledLabel>

          <ButtonForm onClick={handleCreate}>Criar</ButtonForm>
        </ContainerFormAdmin>
      </MainDiv>
    </>
  );
}
