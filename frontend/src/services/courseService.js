import api from "./apiClient";

export const getCourses = async () => {
  const res = await api.get("/api/courses");
  return res.data;
};

export const getCourseById = async (id) => {
  const res = await api.get(`/api/courses/${id}`);
  return res.data;
};