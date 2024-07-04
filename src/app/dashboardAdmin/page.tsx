"use client";

import ButtonAdmin from "@/Components/ButtonAdmin/ButtonAdmin";
import useStore from "@/Stores/useStore";
import FormCreateUser from "@/Components/FormCreateUser/FormCreateUser";
import FormCreateCourse from "@/Components/FormCreateCourse/FormCreateCourse";
import { GlobalStyle } from "./style";
import { useRouter } from "next/navigation";

export default function DashboardAdminPage() {
  const { setFormType } = useStore();

  const router = useRouter();
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "80vh",
            backgroundColor: "#30a7a0",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "80%",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              <h1>Menu Admin</h1>
            </div>
            <div
              style={{
                marginTop: "90px",
                gap: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ButtonAdmin
                onClick={() => {
                  router.push("/listingScreen");
                }}
                text="Listar Usuários"
              ></ButtonAdmin>

              <ButtonAdmin
                onClick={() => {
                  router.push("/listingScreen");
                }}
                text="Listar Cursos"
              ></ButtonAdmin>
            </div>
            <div
              style={{
                marginTop: "50px",
                gap: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ButtonAdmin
                onClick={() => {
                  router.push("/listingScreen");
                }}
                text="Listar Professores"
              ></ButtonAdmin>

              <ButtonAdmin
                onClick={() => {
                  router.push("/listingScreen");
                }}
                text="Listar Cursos"
              ></ButtonAdmin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
