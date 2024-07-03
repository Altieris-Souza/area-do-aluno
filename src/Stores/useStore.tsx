import { create } from "zustand";

interface StoreState {
  formType: "user" | "professor" | "course" | "admin" | null;
  setFormType: (type: "user" | "professor" | "course" | "admin") => void;
}

const useStore = create<StoreState>((set) => ({
  formType: null,
  setFormType: (type) => set({ formType: type }),
}));

export default useStore;
