"use client";
import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ButtonAuth: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default ButtonAuth;
