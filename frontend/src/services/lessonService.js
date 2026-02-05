import { API_BASE } from "../config/api";

export async function getLessons(courseId) {
  const res = await fetch(`${API_BASE}/api/lessons/${courseId}`);
  return res.json();
}
