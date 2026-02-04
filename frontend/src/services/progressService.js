import axios from "axios";

export const getCourseProgress = async (courseId) => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    `http://localhost:5000/api/progress/course/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data;
};
