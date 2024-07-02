"use client";
import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ButtonAuth: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default ButtonAuth;
