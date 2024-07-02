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

export const MainDiv = styled.div`
  background-color: #30a7a0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  /* height: 80vh; */
  margin: 10vh auto;
  padding: 30px;
`;
