"use client";

import ContainerFormAdmin from "@/Components/ContainerFormAdmin/ContainerFormAdmin";
import {
  GlobalStyle,
  LabelText,
  MainDiv,
  Select,
  StyledInput,
  StyledLabel,
} from "./style";
import ButtonForm from "@/Components/ButtonForm/ButtonForm";
import { useRouter } from "next/navigation";
import useUserStore from "@/Stores/userStore";
import useAddressStore from "@/Stores/addressStore";
import { useState } from "react";
import { IAddress, IUser } from "@/utils/interface";

export default function Create() {
  const router = useRouter();

  const { createUser } = useUserStore();
  const { createAddress } = useAddressStore();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [rgm, setRgm] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");

  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [cep, setCep] = useState<string>("");

  const handleCreateUser = async () => {
    const user: IUser = {
      id: 0,
      name: name,
      email: email,
      cpf: cpf,
      rg: rg,
      phoneNumber: phoneNumber,
      password: password,
      gender: gender,
      birthdate: birthDate,
      rgm: rgm,
      addressId: 0,
    };
    const address: IAddress = {
      id: 0,
      country: country,
      state: state,
      city: city,
      street: street,
      number: number,
      cep: cep,
    };

    user.birthdate = user.birthdate.split("T")[0];

    await createAddress(address)
      .then((res) => {
        user.addressId = res;
      })
      .then(() => {
        createUser(user);
        router.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <MainDiv>
        <ContainerFormAdmin>
          <h1 style={{ color: "#30a7a0", padding: "20px" }}>Criar Usuário</h1>
          <StyledLabel>
            <LabelText>Nome</LabelText>
            <StyledInput
              placeholder="Insira o texto"
              onChange={(e) => setName(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>E-mail</LabelText>
            <StyledInput
              placeholder="Insira o e-mail"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>CPF</LabelText>
            <StyledInput
              placeholder="Insira o CPF"
              onChange={(e) => setCpf(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>RG</LabelText>
            <StyledInput
              placeholder="Insira o RG"
              onChange={(e) => setRg(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>RGM (Registro de Matrícula)</LabelText>
            <StyledInput
              placeholder="Insira o RG"
              onChange={(e) => setRgm(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>Data de Nascimento</LabelText>
            <StyledInput
              placeholder="Insira a data de nascimento"
              type="date"
              onChange={(e) => setBirthDate(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>Celular</LabelText>
            <StyledInput
              placeholder="Insira o celular"
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>Senha</LabelText>
            <StyledInput
              placeholder="Insira a senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>Sexo</LabelText>
            <Select onChange={(e) => setGender(e.target.value)}>
              <option selected disabled>
                Selecione uma opção
              </option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </Select>
          </StyledLabel>
          <StyledLabel></StyledLabel>
          <StyledLabel>
            <LabelText>País</LabelText>
            <StyledInput
              placeholder="Insira o país"
              onChange={(e) => setCountry(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>Estado</LabelText>
            <StyledInput
              placeholder="Insira o estado"
              onChange={(e) => setState(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>Cidade</LabelText>
            <StyledInput
              placeholder="Insira a cidade"
              onChange={(e) => setCity(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>Rua</LabelText>
            <StyledInput
              placeholder="Insira a rua"
              onChange={(e) => setStreet(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>Número</LabelText>
            <StyledInput
              placeholder="Insira o número"
              onChange={(e) => setNumber(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <StyledLabel>
            <LabelText>CEP</LabelText>
            <StyledInput
              placeholder="Insira o CEP"
              onChange={(e) => setCep(e.target.value)}
            ></StyledInput>
          </StyledLabel>
          <ButtonForm onClick={handleCreateUser}>Criar</ButtonForm>
        </ContainerFormAdmin>
      </MainDiv>
    </>
  );
}
