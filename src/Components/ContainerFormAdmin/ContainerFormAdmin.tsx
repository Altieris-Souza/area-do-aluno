"use client";
import React, { ReactNode } from "react";
import { ContainerFormInput } from "./style";

interface ContainerFormAdminProps {
  children: ReactNode;
}

const ContainerFormAdmin: React.FC<ContainerFormAdminProps> = ({
  children,
}) => {
  return <ContainerFormInput>{children}</ContainerFormInput>;
};

export default ContainerFormAdmin;
