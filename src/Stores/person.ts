"use client";

import { IPerson } from "@/utils/interface";
import axios from "axios";
import { create } from "zustand";

interface IPersonStore {
  currentPerson?: IPerson;
  createPerson: (person: IPerson) => void;
  signin: (personInfo: ISignin) => void;
}

interface ISignin {
  Email: string;
  Password: string;
}

const baseUrl = "http://localhost:5203/student";

const usePersonStore = create<IPersonStore>((set) => ({
  currentPerson: undefined,
  createPerson: async (person) => {
    await axios.post(`${baseUrl}`, person);
  },
  signin: (personInfo) => {
    axios.post(`${baseUrl}/signin`, personInfo).then((res) => {
      set({ currentPerson: res.data });
    });
  },
}));

export default usePersonStore;
