import { ICourse } from "@/utils/interface";
import { create } from "zustand";
import axios from "axios";

interface ICourseStore {
  allCourses: ICourse[];
  createCourse: (course: ICourse) => void;
  listCourses: () => void;
}

const baseUrl = "http://localhost:5203/course";

const useCourseStore = create<ICourseStore>((set) => ({
  allCourses: [],
  createCourse: async (course) => {
    await axios.post(baseUrl, course);
  },
  listCourses: async () => {
    await axios.get(baseUrl).then((res) => {
      set({ allCourses: res.data });
    });
  },
}));

export default useCourseStore;
