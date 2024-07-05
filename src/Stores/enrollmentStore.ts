import { create } from "zustand";

interface IEnrollmentStore {}

const useEnrollmentStore = create<IEnrollmentStore>((set) => ({}));

export default useEnrollmentStore;
