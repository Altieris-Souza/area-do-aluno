"use client";

import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Container, ButtonElement, GlobalStyle } from "./style";
import { useRouter } from "next/navigation";
import { IUser } from "@/utils/interface";
import useUserStore from "@/Stores/userStore";

import { SearchOutlined } from "@ant-design/icons";

import type { InputRef, TableColumnType, TableProps } from "antd";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import { FilterDropdownProps } from "antd/es/table/interface";

type DataIndex = keyof ITableUser;

export default function Users() {
  const { allUsers, listUsers, deleteUser } = useUserStore();

  useEffect(() => {
    listUsers();
  }, []);

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>();
  const [modalType, setModalType] = useState<"edit" | "delete" | null>(null);

  const [showModal, setShowModal] = useState<boolean>(false);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const data = allUsers.map((user: IUser) => {
    const userRes: ITableUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      rgm: user.rgm,
    };

    return userRes;
  });

  const openModal = (user: IUser, type: "edit" | "delete") => {
    setSelectedUser(user);
    setModalType(type);
    setShowModal(true);
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

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<ITableUser> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder="Buscar"
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Buscar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Limpar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filtrar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Fechar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableProps<ITableUser>["columns"] = [
    {
      title: "Usuário",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      width: "30%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "RGM",
      dataIndex: "rgm",
      key: "rgm",
      width: "20%",
      ...getColumnSearchProps("rgm"),
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="d-flex justify-content-between mt-5">
          <ButtonElement onClick={() => router.push("/admin/dashboard")}>
            Voltar
          </ButtonElement>
          <ButtonElement onClick={() => router.push("/admin/users/create")}>
            Criar usuário
          </ButtonElement>
        </div>
        <Table className="mt-3" columns={columns} dataSource={data} />
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
                : "Certeza que deseja excluir o usuário?"}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Cancelar</Button>
              <Button onClick={handleConfirm}>Confirmar</Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </>
  );
}
