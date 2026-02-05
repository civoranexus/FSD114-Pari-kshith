import api from "./apiClient";

export const enrollCourse = async (courseId) => {
  const res = await api.post(`/api/student/enroll/${courseId}`);
  return res.data;
};

export const getStudentDashboard = async () => {
  const res = await api.get(`/api/student/dashboard`);
  return res.data;
};