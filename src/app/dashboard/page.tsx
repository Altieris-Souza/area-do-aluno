"use client";
import MenuNav from "@/Components/Menu/Menu";
import {
  ContainerNav,
  ContainerImagem,
  GlobalStyle,
  Container,
  StyledTexts,
} from "./style";

export default function DashboardPage() {
  return (
    <>
      <GlobalStyle />
      <ContainerNav>
        <MenuNav></MenuNav>
      </ContainerNav>
      <ContainerImagem></ContainerImagem>
      <Container>
        <div
          style={{
            height: "200px",
            width: "100%",
            gap: "10px",
          }}
        >
          <div>
            <StyledTexts>Início</StyledTexts>
          </div>
          <div
            style={{
              height: "3px",
              width: "70%",
              backgroundColor: "#30a7a0",
              borderRadius: "8px",
            }}
          ></div>
          <div></div>
        </div>
        <div
          style={{
            height: "200px",
            width: "30%",
          }}
        >
          <div>
            <StyledTexts>Notícias e avisos</StyledTexts>
          </div>
          <div
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "#30a7a0",
              borderRadius: "8px",
            }}
          ></div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
