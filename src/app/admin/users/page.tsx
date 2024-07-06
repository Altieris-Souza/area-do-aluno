"use client";

import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CreateButton, GlobalStyle, PageWrapper, SearchInput } from "./style";
import useStore from "@/Stores/useStore";
import UserList from "@/Components/UserList/userList";
import { useRouter } from "next/navigation";
import { IUser } from "@/utils/interface";
import useUserStore from "@/Stores/userStore";

export default function Users() {
  const { setFormType } = useStore();
  const { allUsers, listUsers, deleteUser } = useUserStore();

  useEffect(() => {
    listUsers();
  }, []);

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>();
  const [modalType, setModalType] = useState<"edit" | "delete" | null>(null);

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  //   const filteredUsers = users.filter(
  //     (user) =>
  //       user.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       user.Email.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  const openModal = (user: IUser, type: "edit" | "delete") => {
    setSelectedUser(user);
    setModalType(type);
    setShowModal(true);
  };

  const handleCreateUser = () => {
    setFormType("user");
    router.push("/creationScreen");
  };

  const handleConfirm = async () => {
    if (modalType == "delete") {
      if (selectedUser) {
        await deleteUser(selectedUser.id);
        await listUsers();
        setShowModal(false);
      }
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
        <CreateButton onClick={handleCreateUser}>Cadastrar</CreateButton>
        <UserList
          users={allUsers}
          onEdit={(user) => openModal(user, "edit")}
          onDelete={(user) => openModal(user, "delete")}
        />
      </PageWrapper>
      {modalType && selectedUser && (
        <Modal
          backdrop="static"
          show={showModal}
          type={modalType}
          user={selectedUser}
        >
          <Modal.Header>
            <Modal.Title>
              {modalType == "edit" ? "Editar usuário" : "Excluir usuário"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalType == "edit"
              ? "Em construção..."
              : "Certeza que seja excluir o usuário?"}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
