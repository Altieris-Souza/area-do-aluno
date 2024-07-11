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

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const ButtonElement = styled.button`
  background-color: #30a7a0;
  color: white;
  border-radius: 4px;
  border: none;
  padding: 10px;
`;
