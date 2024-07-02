"use client";

import FormCreateUser from "@/Components/FormCreateUser/FormCreateUser";
import FormCreateCourse from "@/Components/FormCreateCourse/FormCreateCourse";
import { GlobalStyle, MainDiv } from "./style";
import useStore from "@/Stores/useStore";

export default function CreatePage(): any {
  const { formType } = useStore();

  console.log(formType);

  const renderForm = () => {
    switch (formType) {
      case "user":
        return <FormCreateUser />;
      case "course":
        return <FormCreateCourse />;
      default:
        return null;
    }
  };

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <MainDiv>{renderForm()}</MainDiv>
    </>
  );
}
