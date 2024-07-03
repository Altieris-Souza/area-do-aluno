import React from "react";
import styled from "styled-components";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const List = styled.ul`
  width: 80%;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(48, 167, 160, 0.5);
  &:not(:last-child) {
    border-bottom: 1px solid rgba(48, 167, 160, 0.8);
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const Button = styled.button`
  background-color: #30a7a0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <UserInfo>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </UserInfo>
          <div>
            <Button onClick={() => onEdit(user)}>Editar</Button>
            <Button onClick={() => onDelete(user)}>Excluir</Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
