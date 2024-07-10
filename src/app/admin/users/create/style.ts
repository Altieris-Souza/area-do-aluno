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

export const StyledInput = styled.input`
  background-color: #30a7a0;
  border: none;
  border-radius: 4px;
  outline: none;
  height: 30px;
  padding-left: 10px;
  color: white;

  &::placeholder {
    color: white;
    opacity: 0.6;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 14px;
  color: #30a7a0;
  width: 90%;
`;

export const LabelText = styled.span`
  margin-bottom: 5px;
`;

export const Select = styled.select`
  background-color: #30a7a0;
  color: white;
  border: none;
  border-radius: 4px;
  height: 30px;
`;
