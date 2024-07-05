import { IAddress } from "@/utils/interface";
import { create } from "zustand";
import axios from "axios";

interface IAddressStore {
  userAddress?: IAddress;
  getUserAddress: (userId: number) => void;
  createAddress: (address: IAddress) => Promise<number>;
}

const baseUrl = "http://localhost:5203/address";

const useAddressStore = create<IAddressStore>((set) => ({
  userAddress: undefined,
  getUserAddress: (userId) => {
    axios
      .get(`${baseUrl}/user/${userId}`)
      .then((res) => {
        set({ userAddress: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  createAddress: async (address) => {
    const newAddressId = (await axios.post(baseUrl, address)).data;
    return newAddressId.id;
  },
}));

export default useAddressStore;
