"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MenuNav from "@/Components/Menu/Menu";
import {
  Container,
  ContainerColor,
  ContainerNav,
  ContainerValue,
  GlobalStyle,
} from "./style";

export default function SigninPage() {
  const router = useRouter();

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ContainerNav>
        <MenuNav></MenuNav>
      </ContainerNav>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <div
            style={{
              color: "#30a7a0",
              marginBottom: "10px",
            }}
          >
            <h1>Financeiro</h1>
          </div>
          <ContainerColor>
            <Container>
              <div
                style={{ color: "#30a7a0", fontWeight: "700", padding: "10px" }}
              >
                <p>Todas</p>
              </div>
              <div style={{ backgroundColor: "#30a7a0", width: "98%" }}>
                <ContainerValue>
                  <p>Janeiro</p>
                  <p>R$ 1900,00</p>
                </ContainerValue>

                <ContainerValue>
                  <p>Fevereiro</p>
                  <p>R$ 1900,00</p>
                </ContainerValue>

                <ContainerValue>
                  <p>Março</p>
                  <p>R$ 1900,00</p>
                </ContainerValue>

                <ContainerValue>
                  <p>Abril</p>
                  <p>R$ 1900,00</p>
                </ContainerValue>

                <ContainerValue>
                  <p>Maio</p>
                  <p>R$ 1900,00</p>
                </ContainerValue>

                <ContainerValue>
                  <p>Junho</p>
                  <p>R$ 1900,00</p>
                </ContainerValue>
              </div>
            </Container>
          </ContainerColor>
        </div>
      </div>
    </>
  );
}
