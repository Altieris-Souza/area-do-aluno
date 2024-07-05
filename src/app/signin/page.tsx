"use client";
import ContainerAuth from "@/Components/ContainerAuth/ContainerAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StyledForm, StyledContainerDiv, StyledLabel } from "./style";
import ButtonAuth from "@/Components/ButtonAuth/ButtonAuth";
import InputAuth from "@/Components/InputAuth/InputAuth";

export default function SigninPage() {
  const router = useRouter();

  return (
    <>
      <div
        className="signin"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "400px",
          margin: "0 auto",
          marginTop: "130px",
        }}
      >
        <h1 style={{ color: "#30a7a0" }}>Área do aluno</h1>
        <ContainerAuth>
          <StyledForm className="signinForm">
            <h3>Login</h3>

            <StyledContainerDiv className="containerDiv">
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <InputAuth
                placeholder="Digite o seu email"
                id="email"
                name="email"
              />
            </StyledContainerDiv>

            <StyledContainerDiv className="containerDiv">
              <StyledLabel htmlFor="senha">Senha</StyledLabel>
              <InputAuth
                placeholder="Digite sua senha"
                id="senha"
                name="senha"
              />
            </StyledContainerDiv>

            <ButtonAuth
              onClick={() => {
                router.push("/dashboard");
              }}
              text="Entrar"
            />
            <ButtonAuth
              onClick={() => {
                router.push("/dashboardAdmin");
              }}
              text="Entrar como Admin"
            />
          </StyledForm>
        </ContainerAuth>
      </div>
    </>
  );
}
