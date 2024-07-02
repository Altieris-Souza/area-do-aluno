"use client";
import React, { useState } from "react";
import { StyledLink, StyledMenu } from "./style";

const MenuNav: React.FC<any> = () => {
  return (
    <StyledMenu>
      <div>
        <p>Curso atual: {"Engenharia de software"}</p>
      </div>
      <div>
        <StyledLink href="/signin">Alterar curso</StyledLink>
      </div>
    </StyledMenu>
  );
};

export default MenuNav;
