import React from "react";
import styled from "styled-components";

interface User {
  id: number;
  name: string;
  email: string;
}

interface ModalProps {
  type: "edit" | "delete";
  user: User;
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  text-align: center;
`;

const ModalHeader = styled.h2`
  margin-bottom: 20px;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #30a7a0;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #30a7a0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    opacity: 0.8;
  }
`;

const Modal: React.FC<ModalProps> = ({ type, user, onClose }) => {
  return (
    <Overlay>
      <ModalWrapper>
        {type === "edit" ? (
          <>
            <ModalHeader>Editar Usuário</ModalHeader>
            <ModalBody>
              <Input type="text" defaultValue={user.name} />
              <Input type="email" defaultValue={user.email} />
            </ModalBody>
            <Button>Salvar</Button>
          </>
        ) : (
          <>
            <ModalHeader>Excluir Usuário</ModalHeader>
            <ModalBody>Tem certeza que deseja excluir {user.name}?</ModalBody>
            <Button>Sim</Button>
          </>
        )}
        <Button onClick={onClose}>Fechar</Button>
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
