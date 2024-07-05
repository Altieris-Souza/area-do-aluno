import { create } from "zustand";

interface ITuitionStore {}

const useTuitionStore = create<ITuitionStore>((set) => ({}));

export default useTuitionStore;
