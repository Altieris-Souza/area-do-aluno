import { IAddress } from "@/utils/interface";
import { create } from "zustand";
import axios from "axios";

interface IAddressStore {
  userAddress?: IAddress;
  getUserAddress: (userId: number) => void;
}

const baseUrl = "http://localhost:5203/address";

const useAddressStore = create<IAddressStore>((set) => ({
  userAddress: undefined,
  getUserAddress: (userId) => {
    try {
      axios.get(`${baseUrl}/${userId}`).then((res) => {
        set({ userAddress: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useAddressStore;
