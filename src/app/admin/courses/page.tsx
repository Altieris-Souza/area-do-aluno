"use client";

import { CreateButton, GlobalStyle, PageWrapper, SearchInput } from "./style";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useCourseStore from "@/Stores/courseStore";
import { Button, Card, Modal } from "react-bootstrap";
import { ICourse } from "@/utils/interface";
import { toast } from "react-toastify";

export default function Courses() {
  const { allCourses, list, update } = useCourseStore();

  const router = useRouter();

  useEffect(() => {
    list();
  }, []);

  useEffect(() => {
    setCourses(allCourses);
  }, allCourses);

  const [courses, setCourses] = useState<ICourse[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>();

  const [newCourseDepartment, setNewCourseDepartment] = useState<string>("");
  const [isCourseActive, setIsCourseActive] = useState<boolean>();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const openModal = (course: ICourse) => {
    setSelectedCourse(course);

    if (course.active) {
      setIsCourseActive(true);
    } else {
      setIsCourseActive(false);
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setShowModal(false);
  };

  const updateCourse = async () => {
    const newCourse: any = {
      id: selectedCourse?.id,
      name: selectedCourse?.name,
      field: newCourseDepartment,
      active: isCourseActive,
    };

    const data = await update(newCourse);

    if (data) {
      toast.success("Curso atualizado!");
      closeModal();
      list();
    } else {
      toast.error("Erro ao atualizar curso!");
    }
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
          {courses.map((course: ICourse, index: number) => (
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Departamento: {course.field}
                </Card.Subtitle>
                <Card.Text>
                  Ativo: {course.active === true ? "Sim" : "Não"}
                </Card.Text>
                <Card.Link
                  className="btn btn-primary"
                  onClick={() => openModal(course)}
                >
                  Editar
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </div>
        <Modal backdrop="static" show={showModal}>
          <Modal.Header>
            <Modal.Title>Editar curso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label className="me-2">Departamento:</label>
              <input
                type="text"
                placeholder={selectedCourse?.field}
                onChange={(e) => setNewCourseDepartment(e.target.value)}
              />
            </div>
            <div>
              <label className="me-2">Ativo:</label>
              <input
                type="checkbox"
                checked={isCourseActive}
                onChange={() => setIsCourseActive(!isCourseActive)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={updateCourse}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </PageWrapper>
    </>
  );
}
