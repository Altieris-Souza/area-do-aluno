"use client";
import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color?: string;
  colorFont?: string;
}

const ButtonForm: React.FC<ButtonProps> = ({ text, onClick, color }) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  );
};

export default ButtonForm;
