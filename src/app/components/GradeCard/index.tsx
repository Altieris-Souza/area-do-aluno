"use client";
import { Card } from "./styles";

interface IGradeProps {
  name: string;
  grade: number;
}

const GradeCard = ({ name, grade }: IGradeProps) => {
  return (
    <Card className="bg-white rounded-3 text-center p-1">
      <p className="mt-2">{name}</p>
      <div className="text-white pb-5 pt-5">
        <p className="mb-0 fs-4">{grade}</p>
      </div>
      <p className="mb-0 mt-1">Detalhes</p>
    </Card>
  );
};

export default GradeCard;
