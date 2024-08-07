"use client";
import ContainerAuth from "@/Components/ContainerAuth/ContainerAuth";
import { useRouter } from "next/navigation";
import { StyledForm, StyledContainerDiv, StyledLabel } from "./style";
import ButtonAuth from "@/Components/ButtonAuth/ButtonAuth";
import InputAuth from "@/Components/InputAuth/InputAuth";
import useUserStore from "@/Stores/userStore";
import { useState } from "react";
import { ISignin } from "@/utils/interface";
import { toast } from "react-toastify";

export default function SigninPage() {
  const { signin } = useUserStore();

  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignin = async () => {
    const userInfo: ISignin = {
      Email: email,
      Password: password,
    };
    try {
      await signin(userInfo);

      router.push("/dashboard");
    } catch (error: any) {
      const statusError = error.response.status;
      if (statusError == 404) {
        toast.error("E-mail não encontrado.");
      } else if (statusError == 401) {
        toast.error("Senha incorreta.");
      } else {
        toast.error("Erro, tente novamente mais tarde.");
      }
    }
  };

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
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </StyledContainerDiv>

            <StyledContainerDiv className="containerDiv">
              <StyledLabel htmlFor="senha">Senha</StyledLabel>
              <InputAuth
                placeholder="Digite a sua senha"
                id="senha"
                name="senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </StyledContainerDiv>

            <ButtonAuth onClick={handleSignin}>Entrar</ButtonAuth>
            <ButtonAuth
              onClick={() => {
                router.push("/admin/dashboard");
              }}
            >
              Entrar como admin
            </ButtonAuth>
          </StyledForm>
        </ContainerAuth>
      </div>
    </>
  );
}
