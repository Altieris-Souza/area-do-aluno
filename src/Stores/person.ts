"use client";

import { IPerson, ISignin } from "@/utils/interface";
import axios from "axios";
import { create } from "zustand";

interface IPersonStore {
  currentPerson?: IPerson;
  createPerson: (person: IPerson) => void;
  signin: (personInfo: ISignin) => void;
}

const baseUrl = "http://localhost:5203/person";

const usePersonStore = create<IPersonStore>((set) => ({
  currentPerson: undefined,
  createPerson: async (person) => {
    await axios.post(`${baseUrl}`, person);
  },
  signin: async (personInfo) => {
    await axios.post(`${baseUrl}/signin`, personInfo).then((res) => {
      set({ currentPerson: res.data });
    });
  },
}));

export default usePersonStore;
