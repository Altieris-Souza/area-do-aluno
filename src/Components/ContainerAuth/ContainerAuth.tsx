import React from "react";
import { Container } from "./style";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerAuth: React.FC<ContainerProps> = ({ children }) => {
  return <Container className="container">{children}</Container>;
};

export default ContainerAuth;
