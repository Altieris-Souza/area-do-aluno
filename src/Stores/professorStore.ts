import { create } from "zustand";

interface IProfessorStore {}

const useProfessorStore = create<IProfessorStore>((set) => ({}));

export default useProfessorStore;
