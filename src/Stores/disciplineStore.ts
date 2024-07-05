import { create } from "zustand";

interface IDisciplineStore {}

const useDisciplineStore = create<IDisciplineStore>((set) => ({}));

export default useDisciplineStore;
