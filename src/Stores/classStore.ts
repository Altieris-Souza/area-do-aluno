import { create } from "zustand";

interface IClassStore {}

const useClassStore = create<IClassStore>((set) => ({}));

export default useClassStore;
