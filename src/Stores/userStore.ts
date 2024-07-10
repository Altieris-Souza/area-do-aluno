"use client";

import { IUser, ISignin } from "@/utils/interface";
import axios from "axios";
import { create } from "zustand";

interface IUserStore {
  currentUser?: IUser;
  createUser: (user: IUser) => void;
  allUsers: IUser[];
  listUsers: () => void;
  signin: (userInfo: ISignin) => void;
  deleteUser: (userId: number) => void;
}

const baseUrl = "http://localhost:5203/user";

const useUserStore = create<IUserStore>((set) => ({
  currentUser: undefined,
  allUsers: [],
  createUser: async (user) => {
    await axios.post(`${baseUrl}`, user);
  },
  listUsers: async () => {
    await axios.get(baseUrl).then((res) => {
      set({ allUsers: res.data });
    });
  },
  signin: async (userInfo) => {
    await axios.post(`${baseUrl}/signin`, userInfo).then((res) => {
      set({ currentUser: res.data });
    });
  },
  deleteUser: async (userId) => {
    await axios.delete(`${baseUrl}/${userId}`);
  },
}));

export default useUserStore;
