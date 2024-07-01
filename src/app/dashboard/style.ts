import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: Arial, sans-serif; 
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const ContainerImagem = styled.div`
  height: 200px;
  width: 100%;
  background-color: #30a7a0;
`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  margin-top: 30px;
  gap: 5%;
`;

export const StyledTexts = styled.p`
  color: #30a7a0;
  font-size: 20px;
  font-weight: 500;
`;

export const GridContainer = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #30a7a0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerNews = styled.div`
  background-color: #30a7a0;
  width: 100%;
  height: 380px;
  margin-top: 20px;
  border-radius: 8px;
`;

export const ContainerName = styled.div`
  width: 100%;
  background-color: #30a7a0;
  color: white;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  p {
    padding: 10px;
  }
`;
