import { create } from "zustand";

interface ICourseStore {}

const useCourseStore = create<ICourseStore>((set) => ({}));

export default useCourseStore;
