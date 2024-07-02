"use client";

import { GlobalStyle } from "./style";
import useStore from "@/Stores/useStore";

export default function DashboardAdminPage() {
  const { formType } = useStore();

  console.log(formType);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <h1>Teste Tela de listagem</h1>
    </>
  );
}
