"use client";

import { useState } from "react";
import { CardsContainer, Container, SelectContainer } from "./styles";
import AttendanceCard from "../../Components/AttendanceCard";

interface ISubject {
  name: string;
  currentAttendanceNumber: number;
  limit: number;
}

const AttendanceHistory = () => {
  const [semesters, setSemesters] = useState<string[]>([
    "1° Semestre - 2024",
    "2° Semestre - 2024",
  ]);

  const [data, setData] = useState<ISubject[]>([
    {
      name: "Desenvolvimento Web Avançado",
      currentAttendanceNumber: 21,
      limit: 15,
    },
    {
      name: "Modelos de processos de software",
      currentAttendanceNumber: 0,
      limit: 15,
    },
    {
      name: "Computação em nuvem (online)",
      currentAttendanceNumber: 9,
      limit: 20,
    },
    {
      name: "Gestão de projetos de software",
      currentAttendanceNumber: 0,
      limit: 15,
    },
    {
      name: "Tecnologia e Sociedade I",
      currentAttendanceNumber: 18,
      limit: 15,
    },
  ]);

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-around align-items-center rounded-3">
        <SelectContainer className="rounded-3 border-2 bg-transparent text-white border-white p-3 w-25">
          {semesters.map((semester, index) => (
            <option key={index} className="text-black">
              {semester}
            </option>
          ))}
        </SelectContainer>
        <CardsContainer className="d-flex flex-wrap justify-content-center gap-5 w-75">
          {data.map((item, index) => (
            <AttendanceCard
              key={index}
              name={item.name}
              currentAttendanceNumber={item.currentAttendanceNumber}
              limit={item.limit}
            />
          ))}
        </CardsContainer>
      </div>
    </Container>
  );
};

export default AttendanceHistory;
