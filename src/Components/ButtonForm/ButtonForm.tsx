"use client";
import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  onClick?: () => void;
  color?: string;
  colorFont?: string;
  children: React.ReactNode;
}

const ButtonForm: React.FC<ButtonProps> = ({ children, onClick, color }) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

export default ButtonForm;
