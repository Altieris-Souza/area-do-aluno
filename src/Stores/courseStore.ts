import { ICourse } from "@/utils/interface";
import { create } from "zustand";
import axios from "axios";

interface ICourseStore {
  allCourses: ICourse[];
  create: (course: ICourse) => void;
  list: () => void;
  update: (course: ICourse) => Promise<ICourse>;
}

const baseUrl = "http://localhost:5203/course";

const useCourseStore = create<ICourseStore>((set) => ({
  allCourses: [],
  create: async (course) => {
    await axios.post(baseUrl, course);
  },
  list: async () => {
    await axios.get(baseUrl).then((res) => {
      set({ allCourses: res.data });
    });
  },
  update: async (course) => {
    const newCourse: ICourse = await axios
      .patch(baseUrl, course)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error.message);
      });

    return newCourse;
  },
}));

export default useCourseStore;
