import axios from "axios";
import { API_BASE } from "../config/api";
export const getCourseProgress = async (courseId) => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    `${API_BASE}/api/progress/...`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return res.data;
};
