"use client";
import MenuNav from "@/Components/Menu/Menu";
import {
  ContainerNav,
  ContainerImagem,
  GlobalStyle,
  Container,
  StyledTexts,
  GridContainer,
  Card,
  ContainerName,
  ContainerNews,
} from "./style";
import Image from "next/image";
import books from "../../assets/books 1.png";
import test from "../../assets/test 1.png";
import science from "../../assets/science 1.png";
import invesment from "../../assets/invesment 1.png";
import program from "../../assets/program 1.png";
import calendar from "../../assets/calendar 1.png";
import setting from "../../assets/setting 1.png";

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
            width: "60%",
            gap: "10px",
          }}
        >
          <div>
            <StyledTexts>Início</StyledTexts>
          </div>
          <div
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "#30a7a0",
              borderRadius: "8px",
            }}
          ></div>
          <GridContainer>
            <Card>
              <div style={{ height: "140px", alignContent: "center" }}>
                <Image
                  src={books}
                  alt="fghfd da Imagem"
                  style={{
                    width: "100%",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>

              <ContainerName>
                <p>Disciplinas e materiais</p>
              </ContainerName>
            </Card>

            <Card>
              <div style={{ height: "140px", alignContent: "center" }}>
                <Image
                  src={test}
                  alt="fghfd da Imagem"
                  style={{
                    width: "100%",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>

              <ContainerName>
                <p>Notas</p>
              </ContainerName>
            </Card>

            <Card>
              <div style={{ height: "140px", alignContent: "center" }}>
                <Image
                  src={science}
                  alt="fghfd da Imagem"
                  style={{
                    width: "100%",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>

              <ContainerName>
                <p>Presenças e faltas</p>
              </ContainerName>
            </Card>

            <Card>
              <div style={{ height: "140px", alignContent: "center" }}>
                <Image
                  src={invesment}
                  alt="fghfd da Imagem"
                  style={{
                    width: "100%",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>

              <ContainerName>
                <p>Financeiro</p>
              </ContainerName>
            </Card>

            <Card>
              <div style={{ height: "140px", alignContent: "center" }}>
                <Image
                  src={program}
                  alt="fghfd da Imagem"
                  style={{
                    width: "100%",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>

              <ContainerName>
                <p>Grade curricular</p>
              </ContainerName>
            </Card>

            <Card>
              <div style={{ height: "140px", alignContent: "center" }}>
                <Image
                  src={calendar}
                  alt="fghfd da Imagem"
                  style={{
                    width: "100%",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>
              <ContainerName>
                <p>Calendário</p>
              </ContainerName>
            </Card>

            <Card>
              <div style={{ height: "140px", alignContent: "center" }}>
                <Image
                  src={setting}
                  alt="fghfd da Imagem"
                  style={{
                    width: "100%",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    padding: "10px",
                  }}
                />
              </div>
              <ContainerName>
                <p>Configurações</p>
              </ContainerName>
            </Card>
          </GridContainer>
        </div>
        <div
          style={{
            height: "200px",
            width: "35%",
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
          <ContainerNews></ContainerNews>
        </div>
      </Container>
    </>
  );
}
