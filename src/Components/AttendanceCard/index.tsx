"use client";
import { Card } from "./styles";

interface ISubjectProps {
  name: string;
  currentAttendanceNumber: number;
  limit: number;
}

const AttendanceCard = ({
  name,
  currentAttendanceNumber,
  limit,
}: ISubjectProps) => {
  return (
    <Card className="bg-white rounded-3 text-center p-1">
      <p className="mt-2">{name}</p>
      <div className="text-white pb-5 pt-5">
        <p className="mb-0">{currentAttendanceNumber}</p>
        <p className="mb-0">Faltas</p>
      </div>
      <p className="mb-0 mt-1">Limite: {limit}</p>
    </Card>
  );
};

export default AttendanceCard;
