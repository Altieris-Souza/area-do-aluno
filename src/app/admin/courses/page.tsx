"use client";

import { CreateButton, GlobalStyle, PageWrapper, SearchInput } from "./style";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useCourseStore from "@/Stores/courseStore";
import { Card } from "react-bootstrap";

export default function Courses() {
  const { allCourses, listCourses } = useCourseStore();

  const router = useRouter();

  useEffect(() => {
    listCourses();
  }, []);

  useEffect(() => {
    setCourses(allCourses);
  }, allCourses);

  const [courses, setCourses] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <SearchInput
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <CreateButton onClick={() => router.push("/admin/courses/create")}>
          Criar curso
        </CreateButton>
        <div className="d-flex gap-5 mt-5">
          {courses.map((course: any, index: number) => (
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  R$ {course.price}
                </Card.Subtitle>
                <Card.Text>Descrição</Card.Text>
                <Card.Link href="#">Link 1</Card.Link>
                <Card.Link href="#">Link 2</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
