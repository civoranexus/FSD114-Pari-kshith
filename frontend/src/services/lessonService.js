import { API_BASE_URL } from "../config/api";

export async function getLessons(courseId) {
  const res = await fetch(`${API_BASE_URL}/api/lessons/${courseId}`);
  return res.json();
}
