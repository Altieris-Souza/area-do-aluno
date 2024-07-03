"use client";

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { GlobalStyle, PageWrapper, SearchInput } from "./style";
import useStore from "@/Stores/useStore";
import UserList from "@/Components/UserList/userList";

interface User {
  id: number;
  name: string;
  email: string;
}

const initialUsers: User[] = [
  { id: 1, name: "alt teste", email: "teste@mail.com" },
  { id: 2, name: "alt1 teste", email: "teste1@mail.com" },
  { id: 3, name: "alt2 teste", email: "teste2@mail.com" },
  { id: 4, name: "alt3 teste", email: "teste3@mail.com" },
];

export default function DashboardAdminPage() {
  const { formType } = useStore();

  console.log(formType);
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalType, setModalType] = useState<"edit" | "delete" | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (user: User, type: "edit" | "delete") => {
    setSelectedUser(user);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalType(null);
  };

  console.log(modalType);
  console.log(selectedUser);

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
        <UserList
          users={filteredUsers}
          onEdit={(user) => openModal(user, "edit")}
          onDelete={(user) => openModal(user, "delete")}
        />
      </PageWrapper>
      {modalType && selectedUser && (
        <Modal type={modalType} user={selectedUser} onClose={closeModal} />
      )}
    </>
  );
}
