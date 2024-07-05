import { create } from "zustand";

interface IStudentStore {}

const useStudentStore = create<IStudentStore>((set) => ({}));

export default useStudentStore;
