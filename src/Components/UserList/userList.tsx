import React from "react";
import { List, ListItem, UserInfo, Button } from "./style";
import { IUser } from "@/utils/interface";

interface UserListProps {
  users: any;
  onEdit: (user: IUser) => void;
  onDelete: (user: IUser) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <List>
      {users.map((user: any) => (
        <ListItem key={user.Id}>
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
