import { start } from "repl";
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

export const ContainerValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ContainerColor = styled.div`
  background-color: #30a7a0;
  border-radius: 12px;
  color: white;
  display: flex;
  justify-content: center;
  padding: 40px;

  @media (max-width: 600px) {
    padding: 30px 0 20px 0;
  }
`;

export const Container = styled.div`
  background-color: white;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  border-radius: 12px;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;
