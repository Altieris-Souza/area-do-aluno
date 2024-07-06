import ContainerFormAdmin from "@/Components/ContainerFormAdmin/ContainerFormAdmin";
import { LabelText, StyledInput, StyledLabel } from "./style";
import ButtonForm from "@/Components/ButtonForm/ButtonForm";

export default function Create() {
  return (
    <ContainerFormAdmin>
      <h1 style={{ color: "#30a7a0", padding: "20px" }}>Criar curso</h1>
      <StyledLabel>
        <LabelText>Nome</LabelText>
        <StyledInput placeholder="Insira o nome"></StyledInput>
      </StyledLabel>
      <StyledLabel>
        <LabelText>Preço</LabelText>
        <StyledInput placeholder="Insira o preço"></StyledInput>
      </StyledLabel>

      <ButtonForm
        onClick={() => {
          console.log("Altieris");
        }}
      >
        Criar
      </ButtonForm>
    </ContainerFormAdmin>
  );
}
