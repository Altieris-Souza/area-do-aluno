import styled from "styled-components";

export const List = styled.ul`
  width: 80%;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(48, 167, 160, 0.5);
  &:not(:last-child) {
    border-bottom: 1px solid rgba(48, 167, 160, 0.8);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

export const Button = styled.button`
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
