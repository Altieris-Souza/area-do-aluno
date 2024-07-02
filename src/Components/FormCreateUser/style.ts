import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: #30a7a0;
  border: none;
  border-radius: 4px;
  outline: none;
  height: 30px;
  padding-left: 10px;

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
