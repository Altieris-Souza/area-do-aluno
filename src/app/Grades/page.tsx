"use client";

import { useState } from "react";
import { CardsContainer, Container, SelectContainer } from "./styles";
import AttendanceCard from "../components/AttendanceCard";
import GradeCard from "../components/GradeCard";

interface IGrade {
  name: string;
  grade: number;
}

const Grades = () => {
  const [semesters, setSemesters] = useState<string[]>([
    "1° Semestre - 2024",
    "2° Semestre - 2024",
  ]);

  const [data, setData] = useState<IGrade[]>([
    {
      name: "Desenvolvimento Web Avançado",
      grade: 7.9,
    },
    {
      name: "Modelos de processos de software",
      grade: 8.3,
    },
    {
      name: "Computação em nuvem (online)",
      grade: 9.9,
    },
    {
      name: "Gestão de projetos de software",
      grade: 6.2,
    },
    {
      name: "Tecnologia e Sociedade I",
      grade: 7.1,
    },
  ]);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-around align-items-center rounded-3 p-3">
        <SelectContainer className="rounded-3 border-2 bg-transparent text-white border-white p-3 mb-3">
          {semesters.map((semester, index) => (
            <option key={index} className="text-black">
              {semester}
            </option>
          ))}
        </SelectContainer>
        <CardsContainer className="d-flex flex-wrap justify-content-center gap-5">
          {data.map((item, index) => (
            <GradeCard key={index} name={item.name} grade={item.grade} />
          ))}
        </CardsContainer>
      </div>
    </Container>
  );
};

export default Grades;
