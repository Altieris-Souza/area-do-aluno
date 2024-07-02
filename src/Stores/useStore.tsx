import { create } from "zustand";

interface StoreState {
  formType: "user" | "course" | "admin" | null;
  setFormType: (type: "user" | "course" | "admin") => void;
}

const useStore = create<StoreState>((set) => ({
  formType: null,
  setFormType: (type) => set({ formType: type }),
}));

export default useStore;
