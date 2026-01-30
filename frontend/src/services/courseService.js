import { API_BASE_URL } from "../config/api";

export async function getCourses() {
  const res = await fetch(`${API_BASE_URL}/api/courses`);
  return res.json();
}

export async function createCourse(data, token) {
  const res = await fetch(`${API_BASE_URL}/api/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
