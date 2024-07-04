"use client";
import styled from "styled-components";

interface StyledButtonProps {
  color?: string;
}

export const StyledButton = styled.button`
  background-color: #30a7a0;
  transition: background-color 0.3s ease;
  border-radius: 4px;
  padding: 10px 25px 10px 25px;
  min-width: 150px;
  color: white;
  cursor: pointer;
  border: none;
  width: 90%;
  margin-top: 20px;
  font-weight: 700;
  font-size: 16px;
`;
