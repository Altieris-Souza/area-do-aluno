import { create } from "zustand";

interface IExamStore {}

const useExamStore = create<IExamStore>((set) => ({}));

export default useExamStore;
